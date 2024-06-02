
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingWrapper } from "../../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../../core/stores/userStore";
import { addInfo, update } from "../../../core/firebase/config";
import { ISimptomsData, IUserData } from "../../../core/interfaces";

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
    strenght: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSipmptomEnterData({
      ...sipmptomEnterData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data: ISimptomsData = {
      strength: {
        value: 1,
        time: new Date().toString(),
      },
      symptom_description: {
        value: '',
        time: new Date().toString(),
      }
    };
    addInfo(data)
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
