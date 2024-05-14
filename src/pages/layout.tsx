import { Outlet, Link } from "react-router-dom";

export function Layout() {
    return (
    <div className="layout">
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/enter">Enter</Link>
          </li>
          <li>
            <Link to="/app">App</Link>
          </li>
        </ul>
      </nav>
     <Outlet/>
    </div>
    );
  };
  