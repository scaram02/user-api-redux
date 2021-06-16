export const addToFaves = id => {
    return dispatch => {
        dispatch({
            type: 'add',
            payload: id
        })
    }
}

export const removeFromFaves = id => {
    return dispatch => {
        dispatch({
            type: 'remove',
            payload: id
        })
    }
}