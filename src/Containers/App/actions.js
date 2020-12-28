/**
 *   created bt Jixuan Li
 *   2020-12-26-21:03
 */
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "../../constants.js";


//this is an action, input is a text, and the return is an object: type, payload
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,  // constant
    payload: text
})

export const requestRobots = () => (dispatch) =>{
    dispatch({ type:REQUEST_ROBOTS_PENDING });
    const temp = {
        id: 113,
        name: 'Steve Rroboto',
        username: 'S_roboto',
        email: 'Steve.Roboto@kssv.biz'

    }
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data})})
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}
