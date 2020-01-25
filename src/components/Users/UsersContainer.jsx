import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import UsersPagination from './UsersPagination/UsersPagination';
import {setUsers, setCurrentPage, setCurrentUsers, addUser, searchUsers} from '../../redux/usersReducer';
import AddUser from './AddUser/AddUser';
import {setTargetUser} from '../../redux/currentStringReducer';
import CurrentString from './CurrentString/CurrentString';
import SearchForm from './SearchForm/SearchForm';

const UsersContainer = (props) => {

    const setUsers = props.setUsers,
          dataSize = props.dataSize,
          setCurrentUsers = props.setCurrentUsers,
          users = props.users,
          currentPage = props.currentPage;
    
    console.log('render')

    useEffect(() => {
        setUsers(dataSize)
    }, [setUsers, dataSize]);

    useEffect(() => {
        setCurrentUsers();
    }, [users, currentPage, setCurrentUsers]);
    
    const onPageChanged = (currentPage) => {
        props.setCurrentPage(currentPage);
    }

    const onAddUser = (id, firstName, lastName, email, phone) => {
        props.addUser(+id, firstName, lastName, email, phone);
    }

    const getElementInnerText = (e) => {
        const stringValues = Array.from(e.currentTarget.cells).map(el => el.innerText);
        const currentUser = props.users.find(item => item.id === +stringValues[0] && item.firstName === stringValues[1]);           
        props.setTargetUser(currentUser);
    }

    return [
                <AddUser key = {1} addUser = {onAddUser} />,
                <SearchForm key = {2}  searchUsers = {props.searchUsers} />,
                <Users key = {3} {...props}
                  getElementInnerText = {getElementInnerText}
                />,
                <CurrentString key = {4} currentString = {props.currentString} />,
                <UsersPagination key = {5} {...props} onPageChanged = {onPageChanged} />  
                ]
}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        currentUsers: state.usersData.currentUsers,
        totalCount: state.usersData.totalCount,
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
        dataSize: state.isData.isData,
        toggleIsFetching: state.usersData.toggleIsFetching,
        currentString: state.currentString
    }
}

export default connect(mapStateToProps, {setUsers, setCurrentPage, setCurrentUsers, addUser, setTargetUser, searchUsers})(UsersContainer);