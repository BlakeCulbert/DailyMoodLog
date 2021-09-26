import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import Axios from "axios";

function Login() {
    //let history = useHistory();

    const [userRegister, setUserRegister] = useState('')
    const [passRegister, setPassRegister] = useState('')

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [authorized, setAuthorized] = useState('')

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: userRegister,
            password: passRegister,
        }).then((response) => {
            console.log(response);
        });
    };

    const userLogin = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setAuthorized(response.data.message)
            } else {
                setAuthorized(true)
            }
        });
    };

    return (
        <div className="App">
            <div className="form">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text" onChange={(e) => {setUserRegister(e.target.value);}}/>
                <label>Password</label>
                <input type="text" onChange={(e) => {setPassRegister(e.target.value);}}/>
                <button onClick={() => {register()}}>
                    Login
                    </button>
            </div>
            <div className="form">
                <h1>Login</h1>
                <label>Username</label>
                <input type="text" onChange={(e) => {setUsername(e.target.value);}}/>
                <label>Password</label>
                <input type="text" onChange={(e) => {setPassword(e.target.value);}}/>
                <button onClick={() => {userLogin()}}>
                    Login
                    </button>
            </div>
            <h1>{authorized}</h1>
        </div>
    );
};

export default Login;