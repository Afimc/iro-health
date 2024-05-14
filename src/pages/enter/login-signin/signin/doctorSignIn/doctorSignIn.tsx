import { useState } from 'react';
import './doctorSignIn.scss'

export function DoctorSignIn() {
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
        // You can add your login logic here
        console.log(formData);
      };

    return (
        <div className="doctor-signin">
            <form className="doctorform" onSubmit={handleSubmit}>
                <div className='input'>
                    <input
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="enter clinic ID"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="create password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">SignIn</button>
            </form>
        </div>
    );
};