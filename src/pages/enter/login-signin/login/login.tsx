import './login.scss';
import { useEffect, useState } from "react";
import { logInWithEmail } from "../../../../core/firebase/config";
import { useNavigate } from 'react-router-dom';
import { userStore } from '../../../../core/stores/userStore';


export function Login() {
  const setUserStatus = userStore((state)=> state.setUserStatus)
  const userStatus = userStore((state) => state.userStatus);
  const navigate = useNavigate()
  useEffect(()=>{
    if(userStatus === 'LoggedIn') {
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
    logInWithEmail(formData.email, formData.password)
      // .then(()=>{
      //   navigate('/app');
   
      //   setFormData({
      //     email: '',
      //     password: ''
      //   });
      // })
      // .catch((error)=>{
      //   console.log(error)
      // })
    
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
  