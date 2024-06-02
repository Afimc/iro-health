import { useEffect } from "react";
import { userStore } from "../../../core/stores/userStore";


export function UpdateSimptoms() {
  const userUnSubscriber = userStore((state) => state.userUnSubscriber)
   
  useEffect(() => {
    console.log(userUnSubscriber)
 
  }, []);
   

  return (
     <div className="newSimptoms"> Update Simptoms</div> 
    );
  }
  