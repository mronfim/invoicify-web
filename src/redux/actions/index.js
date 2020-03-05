import {
    TOGGLE_NIGHT_MODE,
} from "./types"

export const doNothing = () => ({
    type: "DO_NOTHING",
    payload: {},
})

export const toggleNightMode = () => ({
    type: TOGGLE_NIGHT_MODE,
})