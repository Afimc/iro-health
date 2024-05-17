import { useNavigate } from 'react-router-dom';
import './error.scss'

export function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="error-page">
     <p onClick={()=>{navigate('/')}}>Page can not be found !!! Pleace try again</p> 
    </div>
  );
};
  