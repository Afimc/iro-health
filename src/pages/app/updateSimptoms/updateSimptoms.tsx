
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingWrapper } from "../../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../../core/stores/userStore";
import { ISimptomsData } from "../../../core/interfaces";


export function UpdateSimptoms() {
  const userStatus = userStore((state) => state.userStatus);
  const userData = userStore((state) => state.userData);
  const [onSimptomUpdate,setOnSimptomUpdate] = useState(false)
  const [simptomForUpdate,setSimptomForUpdate] = useState<ISimptomsData|null>(null)
  const [updatedSimptomStrength, setUpdatedSimptomStrength] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus === "LoggedOut") {
      navigate("/login");
      console.log({simptoms:userData.simptoms})
    }
  },[]);



  const handleChange = (e: any) => {
    
    setUpdatedSimptomStrength(e.target.value)
  }


  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUpdatedSimptomStrength(0)
    //function for update the simptom ?
  };




  return (
    <LoadingWrapper isLoading={userStatus}>
      {
        !onSimptomUpdate
        ?<div className="updateSimptomsList">
          <ol>
            {
              userData.simptoms?.map((s,i) => {
                return <li onClick={()=>{setOnSimptomUpdate(true), setSimptomForUpdate(s)}} key={i}>{`${i+1} ${s.symptom_description.value}`}</li>
              }
              )
            }
          </ol>
        </div>
        :<div className="updateSimptom">
          <form className="simptomForm" onSubmit={handleSubmit}>
            <div>
            {`${simptomForUpdate?.symptom_description.value}: `}
              <label>
                how severe the symptoms are ?
                <input
                  type="text"
                  // name="strenght"
                  placeholder='rate from 1 to 10 how severe the symptoms are'
                  value={updatedSimptomStrength}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Update simptom strenght</button>
          </form>
        </div>
      }
    </LoadingWrapper>
  );
}
