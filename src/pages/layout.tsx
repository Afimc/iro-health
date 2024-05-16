import { Outlet, Link } from "react-router-dom";
import './layout.scss'

export function Layout() {
    return (
    <div className="layout">
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
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
  