import {SET_DATA} from './actionTypes/types';

const initialState = {
    isData: false
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {...state, isData: action.dataSize}
        default:
            return {...state};
    }
}

export const setData = (dataSize) => ({type: SET_DATA, dataSize}); 

export default dataReducer;