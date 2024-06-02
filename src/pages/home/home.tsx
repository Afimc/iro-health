import { useNavigate } from 'react-router-dom';
import './home.scss'
import { userStore } from '../../core/stores/userStore';
import { useEffect } from 'react';

export function HomePage() {
  const userData = userStore((state) => state.userData)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(userData)
 
  }, []);

  return (
  <div className="home-page">
    <div className="home-text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Non vitae veniam facere deleniti accusantium recusandae doloremque cumque illum voluptates unde esse, 
        tenetur vel voluptatum distinctio laborum nihil itaque, aut expedita.
      </p>
    </div>
    <div className="app-example" onClick={()=>navigate('/app')}>
      
    </div>
  </div>
  );
};
