import "./app.scss";
import { useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { LoadingWrapper } from "../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../core/stores/userStore";
import { PersonalDataEnter } from "./personalDataEnter/personalDataEnter";
import { NewSimptoms } from "./newSimptoms/newSimptoms";
import { UpdateSimptoms } from "./updateSimptoms/updateSimptoms";

export function AppPage() {
  const navigate = useNavigate();
  const userStatus = userStore((state) => state.userStatus);
  const userData = userStore((state) => state.userData);
  
  
  useEffect(() => {
    if (userStatus==='LoggedOut') {
      navigate("/login");
    }
 
  }, []);
   
 

  return (
    <LoadingWrapper isLoading={userStatus}>
    <div className="app-page">
        <header>
          <h1>{`Hello ${userData.userName} `}</h1>
          <nav>
            <ul>
              <li><Link to="personalDataEnter">Update Personal Data</Link></li>
              <li><Link to="newSimptoms">Add New Simptoms</Link></li>
              <li><Link to="updateSimptoms">Update Simptoms</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="personalDataEnter" element={<PersonalDataEnter />} />
            <Route path="newSimptoms" element={<NewSimptoms />} />
            <Route path="updateSimptoms" element={<UpdateSimptoms />} />
          </Routes>
        </main>
        <footer>
          <p>{`ID: ${userData.userUID} email: ${userData.userEmail} tel:${userData.userPhoneNumber}`} </p>
        </footer>
      </div>
      
    </LoadingWrapper>
  );
  }
