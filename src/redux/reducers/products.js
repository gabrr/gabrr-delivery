import * as constants from '../constants'
const INITIAL_STATE = []

export const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.GET_ALL_PRODUCTS:
            return [...action.data]
        default:
            return state
    }
}