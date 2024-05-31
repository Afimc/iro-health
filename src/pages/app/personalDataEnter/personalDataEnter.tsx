import "./personalDataEnter.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingWrapper } from "../../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../../core/stores/userStore";
import { update } from "../../../core/firebase/config";
import { IUserData } from "../../../core/interfaces";

export function PersonalDataEnter() {
  const userStatus = userStore((state) => state.userStatus);
  const userName = userStore((state) => state.userData.userName);
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
      simptoms: [
        {
          strength: {
            value: 0,
            time: new Date().toString(),
          },
          symptom_description: {
            value: "default",
            time: new Date().toString(),
          },
        },
      ],
    };
    update(data, userData.userUID);
  };

  return (
    <LoadingWrapper isLoading={userStatus}>
      {
        <div className="app-page">
          <h1>Hello {` ${userName}`}</h1>
          <button onClick={() => navigate("/")}>Enter Your Data</button>
          <form className="patientform" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={personalData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="enter your address"
                value={personalData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="enter your phoneNumber"
                value={personalData.phoneNumber}
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
