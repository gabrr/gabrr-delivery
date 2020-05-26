import * as constants from '../constants'
const INITIAL_STATE = []

export const adressesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.GET_ALL_ADDRESSES:
            return [...action.data]
        default:
            return state
    }
}