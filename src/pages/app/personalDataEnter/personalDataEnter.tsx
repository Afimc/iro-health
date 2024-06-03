import "./personalDataEnter.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingWrapper } from "../../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../../core/stores/userStore";
import { update } from "../../../core/firebase/config";
import { IUserData } from "../../../core/interfaces";

export function PersonalDataEnter() {
  const userStatus = userStore((state) => state.userStatus);
  const userData = userStore((state) => state.userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus === "LoggedOut") {
      navigate("/login");
    }
  }, []);

  const [personalData, setPersonalData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data: IUserData = {
      userUID: userData.userUID,
      userName: personalData.name,
      userEmail: userData.userEmail,
      userAddress: personalData.address,
      userPhoneNumber: personalData.phoneNumber,
      simptoms: userData.simptoms,
    };
    update(data, userData.userUID);
    navigate('/app')
  };

  return (
    <LoadingWrapper isLoading={userStatus}>
      {
        <div className="personalDataEnter">
          <form className="patientform" onSubmit={handleSubmit}>
            <div>
              <label>
                Enter your name:
                <input
                  type="text"
                  name="name"
                  placeholder={userData.userName}
                  value={personalData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Enter your address:     
                <input
                  type="text"
                  name="address"
                  placeholder={userData.userAddress}
                  value={personalData.address}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Enter your phone number:
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder={userData.userPhoneNumber}
                  value={personalData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">send</button>
          </form>
        </div>
      }
    </LoadingWrapper>
  );
}
