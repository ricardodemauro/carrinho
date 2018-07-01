import * as types from '../actionTypes'
import { BASE_URI } from '../constants'

export const locationSearch = () => dispatch => {
    const baseUri = BASE_URI();
    const fullUri = `${baseUri}locations`
    return fetch(fullUri)
        .then(response => response.json())
        .then(json => {
            dispatch(locationSearchDone(json))
        })
        .catch(err => {
            dispatch(locationSearchError(err))
        })
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