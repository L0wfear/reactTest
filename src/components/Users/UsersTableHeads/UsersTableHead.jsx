import React from 'react';
import { connect } from 'react-redux';
import { sortUsersById, sortUsersByFirstname, sortUsersByLastname, sortUsersByEmail, sortUsersByPhone } from '../../../redux/usersReducer';
import { ReactComponent as Arrow } from '../../../img/arrow.svg'

const UsersTableHeadsContainer = (props) => {

    const onIdClicked = () => {
        props.sortUsersById();
    }

    const onFirstnameClicked = () => {
        props.sortUsersByFirstname();
    }

    const onLastnameClicked = () => {
        props.sortUsersByLastname();
    }

    const onEmailClicked = () => {
        props.sortUsersByEmail();
    }

    const onPhoneClicked = () => {
        props.sortUsersByPhone();
    }

    return (
        <UsersTableHeads
            {...props}
            onLastnameClicked={onLastnameClicked}
            onEmailClicked={onEmailClicked}
            onPhoneClicked={onPhoneClicked}
            onFirstnameClicked={onFirstnameClicked}
            onIdClicked={onIdClicked} />
    )
}

const UsersTableHeads = (props) => {

    return (
        <tr>
            <th scope="col" onClick={() => { props.onIdClicked() }}>
                id
                <div className={`sort_arrow ${props.toggleIdSort ? 'up' : ''} ${props.toggleIdVisible ? 'active' : ''}`}>
                    <Arrow />
                </div>
            </th>
            <th scope="col" onClick={() => { props.onFirstnameClicked() }}>
                Firstname
                <div className={`sort_arrow ${props.toggleFirstnameSort ? 'up' : ''} ${props.toggleFirstnameVisible ? 'active' : ''}`}>
                    <Arrow />
                </div>
            </th>
            <th scope="col" onClick={() => { props.onLastnameClicked() }}>
                Lastname
                <div className={`sort_arrow ${props.toggleLastnameSort ? 'up' : ''} ${props.toggleLastnameVisible ? 'active' : ''}`}>
                    <Arrow />
                </div>
            </th>
            <th scope="col" onClick={() => { props.onEmailClicked() }}>
                email
                <div className={`sort_arrow ${props.toggleEmailSort ? 'up' : ''} ${props.toggleEmailVisible ? 'active' : ''}`}>
                    <Arrow />
                </div>

            </th>
            <th scope="col" onClick={() => { props.onPhoneClicked() }}>
                Phone
                <div className={`sort_arrow ${props.togglePhoneSort ? 'up' : ''} ${props.togglePhoneVisible ? 'active' : ''}`}>
                    <Arrow />
                </div>
            </th>
        </tr>
    )
}

const mapStateToProps = (state) => {
    return {
        toggleIdSort: state.usersData.toggleIdSort,
        toggleFirstnameSort: state.usersData.toggleFirstnameSort,
        toggleLastnameSort: state.usersData.toggleLastnameSort,
        toggleEmailSort: state.usersData.toggleEmailSort,
        togglePhoneSort: state.usersData.togglePhoneSort,
        toggleIdVisible: state.usersData.toggleIdVisible,
        toggleFirstnameVisible: state.usersData.toggleFirstnameVisible,
        toggleLastnameVisible: state.usersData.toggleLastnameVisible,
        toggleEmailVisible: state.usersData.toggleEmailVisible,
        togglePhoneVisible: state.usersData.togglePhoneVisible
    }
}

export default connect(mapStateToProps, { sortUsersById, sortUsersByFirstname, sortUsersByLastname, sortUsersByEmail, sortUsersByPhone, })(UsersTableHeadsContainer);
