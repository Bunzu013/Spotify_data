const Reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
            };
        case "GET_DATA_START":
            return {
                data: null,
                isFetching: true,
                error: false,
            };
        case "GET_DATA_SUCCESS":
            return {
                data: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_DATA_FAILURE":
            return {
                data: null,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;