import { useState } from 'react';
import './patientSignIn.scss'
import { createUserWithEmail } from '../../../../../core/firebase/config';

export function PatientSignIn() {
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
        createUserWithEmail(formData.email, formData.password)
        console.log(formData);
        setFormData({
          email: '',
          password: '',
        })
        console.log(formData)
      };

    return (
        <div className="patient-signin">
             <form className="patientform" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
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