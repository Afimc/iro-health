import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  addSimptoms, auth, logOut,  } from "../../core/firebase/config";
import "./app.scss";
import { LoadingWrapper } from "../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../core/stores/userStore";
import { ISimptomsData } from "../../core/interfaces";

export function AppPage() {

  const userStatus = userStore((state) => state.userStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userStatus.islogedIn) {
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
   console.log(SimptomData)
  //  const strenghtData = []
  //  strenghtData.push(Number(SimptomData.strenght))
  // //  const data:ISimptomsData={
  // //   UserUID:auth.currentUser?.uid || '',
  // //   simptoms :[
  // //     {
  // //         strength: strenghtData,
  // //         symptom_description: SimptomData.simptomsDiscribtion,
  // //     },
  // // ],
  // //  }
  // //   setUser(data)
  // //  addSimptoms(user)
  // //  setSimptomData({
  //     simptomsDiscribtion: "",
    //   strenght: '',
    // });
  };
  // const update = updateDocs( user.simptoms)


  function onLogOut() {
    logOut();
    navigate("/");
  }

  return (
    <LoadingWrapper isLoading={userStatus.pending}>
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
