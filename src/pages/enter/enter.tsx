import { useState } from 'react';
import './enter.scss'
import { Login } from './login-signin/login/login';
import { Signin } from './login-signin/signin/signIn';


export function EnterPage() {
    const [action, setAction] = useState(true)
    return (
    <div className="enter-page">
        <div className="action">
            <button onClick={() => setAction(false)}>SignIn</button>
            <button onClick={() => setAction(true)}>Login</button>
        </div>
        {
            action
                ? <Login />
                : <Signin/>
        }
    </div>
    );
  };
  