import { combineReducers } from "redux"
import { TOGGLE_NIGHT_MODE } from "../actions/types"

const initialState = {
    nightMode: false,
}

function doNothing(state = {}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function nightMode(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_NIGHT_MODE: {
            return {
                ...state,
                nightMode: !state.nightMode,
            }
        }
        default:
            return state
    }
}

export default combineReducers({
    doNothing,
    nightMode,
})
