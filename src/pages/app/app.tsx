import "./app.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../core/firebase/config";
import { LoadingWrapper } from "../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../core/stores/userStore";


export function AppPage() {
  const setUserStatus = userStore((state)=> state.setUserStatus)
  const userStatus = userStore((state) => state.userStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus==='LoggedOut') {
      navigate("/login");
    }
 
  }, []);

  const [SimptomData, setSimptomData] = useState({
    simptomsDiscribtion: "",
    strenght: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSimptomData({
      ...SimptomData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    


  }

  function onLogOut() {
    logOut();
    setUserStatus('LoggedOut')
    navigate("/");
    
  }

  return (
    <LoadingWrapper isLoading={userStatus}>
      {
        <div className="app-page">
          <button onClick={() => onLogOut()}>LogOut</button>
          <form className="patientform" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="simptomsDiscribtion"
                placeholder="discribe your simptoms"
                value={SimptomData.simptomsDiscribtion}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="strenght"
                placeholder="enter the strenght"
                value={SimptomData.strenght}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">send</button>
          </form>
        </div>
      }
    </LoadingWrapper>
  );
  }
