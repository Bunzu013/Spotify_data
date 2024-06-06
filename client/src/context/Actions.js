export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error,
});

export const Logout = () => ({
    type: "LOGOUT",
});

export const getDataStart = () => ({
    type: "GET_DATA_START"
});

export const getDataSuccess = (data) => ({
    type: "GET_DATA_SUCCESS",
    payload: data,
});

export const getDataFailure = (error) => ({
    type: "GET_DATA_FAILURE",
    payload: error,
});