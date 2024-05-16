import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, logOut } from "../../core/firebase/config";

export function AppPage() {
  const navigate = useNavigate()

  useEffect(()=>{
    const isLoggedIn = !!auth.currentUser
    if(!isLoggedIn) {
      navigate('/login')
    }
  },[]);

  function onLogOut() {
    logOut()
    navigate('/')
  }
  

  return (
      !auth.currentUser
      ? <p>loading</p>
      : <div className="app-page">
        <button onClick={()=>onLogOut()}>LogOut</button>
          App Page
        </div>
  );
};
  