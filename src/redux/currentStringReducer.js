import {SET_TARGET_USER} from './actionTypes/types';

const initialState = {
    visible: false,
    user: {}
}

const currentStringReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TARGET_USER:
            return {...state, visible: true, user: action.user}
        default:
            return {...state};
    }
}

export const setTargetUser = (user) => ({type: SET_TARGET_USER, user});

export default currentStringReducer;