import * as types from '../actionTypes'

const mockData = {
    coords: [
        { lat: -23.6917598, lng: -46.5616912, time: 0 },
        { lat: -23.6917511, lng: -46.5615522, time: 1000 },
        { lat: -23.6917511, lng: -46.5615522, time: 2000 },
        { lat: -23.6917216, lng: -46.5613135, time: 3000 }
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