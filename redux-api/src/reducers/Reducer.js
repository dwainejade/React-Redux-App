// Step 0: write and initialize the reducer

import {
    FETCHING_CHARACTER_START,
    FETCHING_CHARACTER_SUCCESS,
    FETCHING_CHARACTER_ERROR
} from "../actions/index"

const initialState = {
    character: [],
    isFetching: false,
    adding: false,
    errors: '',
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CHARACTER_START:
            console.log("fetching new character");
            return {
                ...state, isFetching: true
            };
        case FETCHING_CHARACTER_SUCCESS:
            return {
                ...state, character: action.payload, isFetching: false, errors: ''
            };
        case FETCHING_CHARACTER_ERROR:
            return {
                ...state, errors: action.payload, isFetching: false
            };
        default:
            return state;
    }
};