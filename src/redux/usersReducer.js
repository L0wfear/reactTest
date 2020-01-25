import { usersAPI } from "../api/api";
import { reset } from 'redux-form';
import {
    SET_USERS, SET_CURRENT_USERS, SET_CURRENT_PAGE, SORT_USERS_BY_ID, SORT_USERS_BY_FIRSTNAME, SORT_USERS_BY_LASTNAME,
    SORT_USERS_BY_EMAIL, SORT_USERS_BY_PHONE, TOGGLE_IS_FETCHING, ADD_USER, SEARCH_USERS
} from './actionTypes/types';

const initialState = {
    users: [],
    initialUsers: [],
    totalCount: 50,
    pageSize: 15,
    currentPage: 1,
    currentUsers: [],
    toggleIdSort: false,
    toggleFirstnameSort: false,
    toggleLastnameSort: false,
    toggleEmailSort: false,
    togglePhoneSort: false,
    toggleIdVisible: false,
    toggleFirstnameVisible: false,
    toggleLastnameVisible: false,
    toggleEmailVisible: false,
    togglePhoneVisible: false
}

const compare = (a, b, toggleSort) => {
    if (!toggleSort) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    }

    if (toggleSort) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
    }

    return 0;
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users, totalCount: action.users.length, initialUsers: action.users }
        case SET_CURRENT_USERS:
            return {
                ...state, currentUsers: state.users
                    .filter((el, index) => index >= (state.pageSize * state.currentPage) - state.pageSize && index <= (state.pageSize * state.currentPage) - 1)
            }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SORT_USERS_BY_ID:
            return {
                ...state, toggleIdSort: !state.toggleIdSort,
                toggleFirstnameSort: false,
                toggleLastnameSort: false,
                toggleEmailSort: false,
                togglePhoneSort: false,
                toggleIdVisible: true,
                toggleFirstnameVisible: false,
                toggleLastnameVisible: false,
                toggleEmailVisible: false,
                togglePhoneVisible: false,
                users: [...state.users.sort((a, b) => compare(a.id, b.id, state.toggleIdSort))]
            }
        case SORT_USERS_BY_FIRSTNAME:
            return {
                ...state, toggleFirstnameSort: !state.toggleFirstnameSort,
                toggleIdSort: false,
                toggleLastnameSort: false,
                toggleEmailSort: false,
                togglePhoneSort: false,
                toggleIdVisible: false,
                toggleFirstnameVisible: true,
                toggleLastnameVisible: false,
                toggleEmailVisible: false,
                togglePhoneVisible: false,
                users: [...state.users.sort((a, b) => compare(a.firstName, b.firstName, state.toggleFirstnameSort))]
            }
        case SORT_USERS_BY_LASTNAME:
            return {
                ...state, toggleLastnameSort: !state.toggleLastnameSort,
                toggleIdSort: false,
                toggleFirstnameSort: false,
                toggleEmailSort: false,
                togglePhoneSort: false,
                toggleIdVisible: false,
                toggleFirstnameVisible: false,
                toggleLastnameVisible: true,
                toggleEmailVisible: false,
                togglePhoneVisible: false,
                users: [...state.users.sort((a, b) => compare(a.lastName, b.lastName, state.toggleLastnameSort))]
            }
        case SORT_USERS_BY_EMAIL:
            return {
                ...state, toggleEmailSort: !state.toggleEmailSort,
                toggleIdSort: false,
                toggleFirstnameSort: false,
                toggleLastnameSort: false,
                togglePhoneSort: false,
                toggleIdVisible: false,
                toggleFirstnameVisible: false,
                toggleLastnameVisible: false,
                toggleEmailVisible: true,
                togglePhoneVisible: false,
                users: [...state.users.sort((a, b) => compare(a.email, b.email, state.toggleEmailSort))]
            }
        case SORT_USERS_BY_PHONE:
            return {
                ...state, togglePhoneSort: !state.togglePhoneSort,
                toggleIdSort: false,
                toggleFirstnameSort: false,
                toggleLastnameSort: false,
                toggleEmailSort: false,
                toggleIdVisible: false,
                toggleFirstnameVisible: false,
                toggleLastnameVisible: false,
                toggleEmailVisible: false,
                togglePhoneVisible: true,
                users: [...state.users.sort((a, b) => compare(a.phone, b.phone, state.togglePhoneSort))]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, toggleIsFetching: true
            }
        case ADD_USER:
            const addUserArr = [...state.users];
            addUserArr.unshift(action.user);
            return {
                ...state, users: addUserArr, totalCount: addUserArr.length
            }
        case SEARCH_USERS:
            const param = action.param;
            const regexp = new RegExp(action.str, 'i');
            const searchResults = state.initialUsers.filter((el) => regexp.test(el[param]));
            return {
                ...state, users: searchResults, totalCount: searchResults.length
            }
        default:
            return { ...state }
    }
}

const setUsersAC = (users) => ({ type: SET_USERS, users });
const setToggleIsFetching = () => ({ type: TOGGLE_IS_FETCHING });
export const setCurrentUsers = () => ({ type: SET_CURRENT_USERS });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const sortUsersById = () => ({ type: SORT_USERS_BY_ID });
export const sortUsersByFirstname = () => ({ type: SORT_USERS_BY_FIRSTNAME });
export const sortUsersByLastname = () => ({ type: SORT_USERS_BY_LASTNAME });
export const sortUsersByEmail = () => ({ type: SORT_USERS_BY_EMAIL });
export const sortUsersByPhone = () => ({ type: SORT_USERS_BY_PHONE });
const addUserAC = (id, firstName, lastName, email, phone) => ({ type: ADD_USER, user: { id, firstName, lastName, email, phone } });
export const searchUsers = (str, param) => ({ type: SEARCH_USERS, str, param });

export const setUsers = (rows, delay) => {
    return (dispatch) => {
        return usersAPI.getUsers(rows, delay)
            .then(data => {
                dispatch(setUsersAC(data));
                dispatch(setCurrentUsers());
                dispatch(setToggleIsFetching());
            })
    }
}

export const addUser = (id, firstName, lastName, email, phone) => {
    return (dispatch) => {
        dispatch(addUserAC(id, firstName, lastName, email, phone));
        dispatch(reset('items'))
    }
}



export default usersReducer;