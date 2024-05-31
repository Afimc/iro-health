import "./app.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "../../core/firebase/config";
import { LoadingWrapper } from "../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../core/stores/userStore";
import { PersonalDataEnter } from "./personalDataEnter/personalDataEnter";

export function AppPage() {
  const navigate = useNavigate();
  const userStatus = userStore((state) => state.userStatus);
  const userData = userStore((state) => state.userData);
  const [onDataEnter, setOnDataEnter] = useState(false)
  
  useEffect(() => {
    if (userStatus==='LoggedOut') {
      navigate("/login");
    }
 
  }, []);
   
  function onLogOut() {
    userLogOut();
    navigate("/");
  }

  return (
    <LoadingWrapper isLoading={userStatus}>
      {
        !onDataEnter
        ?<div className="app-page">
          <h1>{`Hello ${userData.userEmail} ID: ${userData.userUID} name: ${userData.userName} tel:${userData.userPhoneNumber}`}</h1>
          <button onClick={() => onLogOut()}>LogOut</button>
          <button onClick={() => setOnDataEnter(true)} >Enter Your Data</button> 
        </div>
        :<PersonalDataEnter/>
      }
    </LoadingWrapper>
  );
  }
