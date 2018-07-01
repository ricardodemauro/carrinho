import * as types from '../actionTypes'

const mockData = {
    coords: [
        { lat: 40.748817, lng: -73.985428, time: 1000 },
        { lat: 40.748817, lng: -73.485428, time: 2000 },
        { lat: 40.848817, lng: -73.985428, time: 3000 }
    ]
}

export const locationSearch = () => dispatch => {
    dispatch(locationSearchDone(mockData))
}

export const locationSearchDone = (result) => {
    return {
        type: types.LOCATION_SEARCH_DONE,
        result: result
    }
}

export const locationSearchError = (error) => {
    return {
        type: types.LOCATION_SEARCH_ERROR,
        error: error
    }
}