import { useNavigate } from 'react-router-dom';
import './home.scss'

export function HomePage() {
  const navigate = useNavigate()

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
