import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../core/firebase/config";

export function AppPage() {
  const navigate = useNavigate()

  useEffect(()=>{
    const isLoggedIn = !!currentUser
    if(!isLoggedIn) {
      navigate('/login')
    }
  },[]);

    return (
       !currentUser
        ? <p>loading</p>
        : <div className="app-page">App Page</div>
    );
  };
  