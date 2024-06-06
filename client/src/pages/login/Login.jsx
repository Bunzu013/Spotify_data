import axios from 'axios'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './login.css'
import { userContext } from '../../context/Context'
import { useContext, useRef } from 'react'

export default function Login(){
    const userRef = useRef()
    const passwordRef = useRef()
    const {dispatch, isFetching} = useContext(userContext)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        dispatch({type: "LOGIN_START"})
        axios.post("/api/users/login", {
            userName: userRef.current.value,
            password: passwordRef.current.value
        }).then((res) => {
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            window.location.replace("/")
        }).catch((err) => {
            dispatch({type: "LOGIN_FAILURE"})
            setError(true)
        })
    }

    return(
        <div className="login">
            <span className="loginTitle">Logowanie</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Nazwa uzytkownika</label>
                <input type="text" className="loginInput" placeholder="Wpisz nazwe uzytkownika" ref={userRef}/>
                <label>Haslo</label>
                <input type="password" className="loginInput" placeholder="Wpisz haslo" ref={passwordRef}/>
                <button className="loginButton" type="submit" disabled={isFetching}>Zaloguj</button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/register" className="link">Zarejestruj sie</Link>
            </button>
            {error && <span style={{color: "red", marginTop: "10px"}}>Cos poszlo nie tak!</span>}
        </div>
    )
}