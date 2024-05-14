import { useState } from "react";
import { PatientSignIn } from "./patientSignIn/patientSignIn";
import './signIn.scss'
import { DoctorSignIn } from "./doctorSignIn/doctorSignIn";

export function Signin() {
    const [action, setAction] = useState(true)
    return (
        <div className="signin">
            <button onClick={() => setAction(true)}>
                <span>D</span><span>o</span><span>c</span><span>t</span><span>o</span><span>r</span>
            </button>
            <div className="form">
            {
                action
                ? <DoctorSignIn />
                : <PatientSignIn/>
            }
            </div>
           
            <button onClick={() => setAction(false)}>
                <span>P</span><span>a</span><span>t</span><span>i</span><span>e</span><span>n</span><span>t</span>
            </button>
        </div>
    );
};
