import "./app.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../core/firebase/config";
import { LoadingWrapper } from "../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../core/stores/userStore";
import { PersonalDataEnter } from "./personalDataEnter/personalDataEnter";


export function AppPage() {
  const setUserStatus = userStore((state)=> state.setUserStatus);
  const userStatus = userStore((state) => state.userStatus);
  const userData = userStore((state) => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus==='LoggedOut') {
      navigate("/login");
    }
 
  }, []);

  const [onDataEnter, setOnDataEnter] = useState(false)
   

  function onLogOut() {
    logOut();
    setUserStatus('LoggedOut')
    navigate("/");
    
  }

  return (
    <LoadingWrapper isLoading={userStatus}>
      {
        !onDataEnter
        ?<div className="app-page">
          <h1>Hello {` ${userData.userEmail} ID: ${userData.userUID}`}</h1>
          <button onClick={() => onLogOut()}>LogOut</button>
          <button onClick={() => setOnDataEnter(true)} >Enter Your Data</button>
          
        </div>
        :<PersonalDataEnter/>
      }
    </LoadingWrapper>
  );
  }
