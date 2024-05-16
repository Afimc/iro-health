import './login.scss';
import { useEffect, useState } from "react";
import { currentUser, logInWithEmail } from "../../../../core/firebase/config";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate()
  useEffect(()=>{
    const isLoggedIn = !!currentUser
    if(isLoggedIn) {
      navigate('/app')
    }
  },[]);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
     
    
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData)
    
    logInWithEmail(formData.email, formData.password)
    setFormData({
      email: '',
      password: ''
    });
    console.log(formData)
  };


    return (
        <div className="login">
            <form className="loginform" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
  };
  