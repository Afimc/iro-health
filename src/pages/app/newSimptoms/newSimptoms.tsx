
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingWrapper } from "../../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../../core/stores/userStore";
import { update } from "../../../core/firebase/config";
import { ISimptomsData } from "../../../core/interfaces";

export function NewSimptoms() {
  const userStatus = userStore((state) => state.userStatus);
  const userData = userStore((state) => state.userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus === "LoggedOut") {
      navigate("/login");
    }
  }, []);

  const [sipmptomEnterData, setSipmptomEnterData] = useState({
    simptom: "",
    strenght: 0,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSipmptomEnterData({
      ...sipmptomEnterData,
      [name]: value,
    });
  };

  function getData() {
    const data = userData
    const newSimptom:ISimptomsData = {
      strength: {    
        value: sipmptomEnterData.strenght,
        time: new Date().toString(),
      },
      symptom_description: {
        value: sipmptomEnterData.simptom,
        time: new Date().toString(),
      },
    }
    data.simptoms.push(newSimptom)
    return data
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = getData()
    update(data, userData.userUID);
    navigate('/app')
  };

  return (
    <LoadingWrapper isLoading={userStatus}>
      {
        <div className="newSimptoms">
          <form className="simptomForm" onSubmit={handleSubmit}>
            <div>
              <label>
                Waht your simptom is ?
                <input
                  type="text"
                  name="simptom"
                  placeholder='describe your symptoms in a few sentences '
                  value={sipmptomEnterData.simptom}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                
                how severe the symptoms are ?
                <input
                  type="text"
                  name="strenght"
                  placeholder='rate from 1 to 10 how severe the symptoms are'
                  value={sipmptomEnterData.strenght}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Add simptom</button>
          </form>
        </div>
      }
    </LoadingWrapper>
  );
}
