import { USERS_URL } from "../../Templates/UsersTemplate/constants"

export const addDataActionCreator = (amount) => {
    return {
        type: 'ADD_DATA',
        payload: amount,
    }
}

export const removeDataActionCreator = (amount) => {
    return {
        type: 'REMOVE_DATA',
        payload: amount,
    }
}

export const authActionCreator = () => {
    return {
        type: 'AUTH',
        payload: true,
    }
}

export const getUserLoadingActionCreator = (loading) => {
    return {
        type: 'GET_USER_LOADING',
        payload: loading,
    }
}

export const getUserSuccessActionCreator = (user) => {
    return {
        type: 'GET_USER_SUCCESS',
        payload: user,
    }
}

export const getUserFailActionCreator = (error) => {
    return {
        type: 'GET_USER_FAIL',
        payload: error,
    }
}

// thunk
export const getUserActionCreator = async dispatch => {
    dispatch(getUserLoadingActionCreator(true));
    try {
        const response = await fetch(USERS_URL);
        const data = await response.json();

        if (data) {
            dispatch(getUserSuccessActionCreator(data));

            setTimeout(() => {
                dispatch(getUserLoadingActionCreator(false));
            }, 1000);
        }
    } catch (error) {
        dispatch(getUserFailActionCreator(error.message));
        dispatch(getUserLoadingActionCreator(false));
    }
}