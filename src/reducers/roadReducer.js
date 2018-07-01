import { LOCATION_SEARCH, LOCATION_SEARCH_DONE, LOCATION_SEARCH_ERROR } from '../actionTypes'

const roadReducer = (state = {}, action) => {
    const { result } = action
    switch (action.type) {
        case LOCATION_SEARCH_DONE:
            return {
                ...state,
                result
            }
        case LOCATION_SEARCH_ERROR:
        case LOCATION_SEARCH:
        default:
            return state
    }
}

export default roadReducer