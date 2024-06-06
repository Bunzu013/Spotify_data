import './topbar.css'
import { useContext } from 'react'
import { userContext } from '../../context/Context'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'


export default function TopBar(){
    const {user, dispatch} = useContext(userContext)

    if(user !== null){
        var token = user
        //decode token
        var decoded = jwtDecode(token)
        console.log(decoded)
        //sub to get username
        var userName = decoded.sub.split(',')[0]
        console.log(userName)
        var isAdmin = decoded.isAdmin
    }

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }


    return(
        <div className="top">
            <div className="topLeft">
            <Link to="/" className="logo-link">
                <h1 className="logo">Spotify</h1>
                </Link>
            </div>
            <div className="topRight">
                {user ? (
                    <>
                    <div className="topList">
                        {isAdmin && <Link to="/admin" className="topListItem link">Admin</Link>}
                        <span className="topListItem">Witaj {userName}</span>
                        <Link to="/" className="topListItem link" onClick={handleLogout}>Wyloguj</Link>
                    </div>
                    </>
                ) : (
                    <>
                    <div className="topList">
                    <Link to="/login" className="topListItem link">Logowanie</Link>
                    <Link to="/register" className="topListItem link">Rejestracja</Link>
                    </div>
                    </>
                )}
            </div>
        </div>
    )
}