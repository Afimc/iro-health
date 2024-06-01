import { Outlet, Link } from "react-router-dom";
import './layout.scss'
import { userStore } from "../core/stores/userStore";
import { userLogOut } from "../core/firebase/config";

export function Layout() {
  const userStatus = userStore((state) => state.userStatus);
  function butonOnStatus() {
    let switchButton:Boolean = true
    if(userStatus==="LoggedIn"){ 
      switchButton = true
    } else {
      switchButton = false
    }
    return switchButton
  }  

  function onLogOut() {
    userLogOut();
    
  }

    return (
    <div className="layout">
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           {
            !butonOnStatus()
            ?<Link to="/login">Login</Link>
            :<Link to="/" onClick={()=>onLogOut()}>LogOut</Link>
           }
          </li>
          <li>
            <Link to="/app">App</Link>
          </li>
        </ul>
      </nav>
     <div className="outlet"><Outlet/></div>
    </div>
    );
  };
  