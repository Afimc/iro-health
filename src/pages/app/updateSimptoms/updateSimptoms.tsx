
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingWrapper } from "../../../shared/loadingWrapper/loadingWrapper";
import { userStore } from "../../../core/stores/userStore";


export function UpdateSimptoms() {
  const userStatus = userStore((state) => state.userStatus);
  const userData = userStore((state) => state.userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus === "LoggedOut") {
      navigate("/login");
    }
  }, []);




  return (
    <LoadingWrapper isLoading={userStatus}>
      {
        <div className="updateSimptoms">
          {/* <ol>
            {
              
              userData.simptoms?.map((s,i) => {
                return <li key={i}>{s.symptom_description.value}</li>
              }
              )
            }
          </ol> */}
        </div>
      }
    </LoadingWrapper>
  );
}
