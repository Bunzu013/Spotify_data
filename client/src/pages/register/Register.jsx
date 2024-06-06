import axios from 'axios'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './register.css'

export default function Register(){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] =  useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try{
            const res = await axios.post('/api/users/signup', {
                userName: username,
                email: email,
                password: password
            })
            res.data && window.location.replace('/login')
        }catch(err){
            setError(true)
        }
    }


    return(
        <div className="register">
            <span className="registerTitle">
                Rejestracja
            </span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label>Nazwa uzytkownika</label>
                <input type="text" className="registerInput" placeholder="Wpisz nazwe uzytkownika" onChange={(e) => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Wpisz email" onChange={(e) => setEmail(e.target.value)}/>
                <label>Haslo</label>
                <input type="password" className="registerInput" placeholder="Wpisz haslo" onChange={(e) => setPassword(e.target.value)}/>
                <button className="registerButton" type="submit">Zarejestruj</button>
                <button className="registerLoginButton">
                    <Link to="/login" className="link">Zaloguj sie</Link>
                </button>
                {error && <span style={{color: "red", marginTop: "10px"}}>Cos poszlo nie tak!</span>}
            </form>
        </div>
    )
}