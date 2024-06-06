import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

//initial state for user
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

//initial state for data
const INITIAL_STATE_DATA = {
    data: JSON.parse(localStorage.getItem("data")) || null,
    isFetching: false,
    error: false,
};

export const userContext = createContext(INITIAL_STATE);
export const dataContext = createContext(INITIAL_STATE_DATA);

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <userContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </userContext.Provider>
    );
}

export const DataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE_DATA);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(state.data));
    }, [state.data]);

    return (
        <dataContext.Provider
            value={{
                data: state.data,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </dataContext.Provider>
    );
}