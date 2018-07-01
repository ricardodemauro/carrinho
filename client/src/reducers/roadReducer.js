import { LOCATION_SEARCH, LOCATION_SEARCH_DONE, LOCATION_SEARCH_ERROR } from '../actionTypes'

const initialState = { coords: [] }
const roadReducer = (state = initialState, action) => {
    const { result } = action
    switch (action.type) {
        case LOCATION_SEARCH_DONE:
            return {
                ...state,
                coords: result
            }
        case LOCATION_SEARCH_ERROR:
        case LOCATION_SEARCH:
        default:
            return state
    }
}

export default roadReducer