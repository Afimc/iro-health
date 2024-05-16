import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/layout";
import { HomePage } from "./pages/home/home";
import { EnterPage } from "./pages/enter/enter";
import { AppPage } from "./pages/app/app";
import { ErrorPage } from "./pages/error/error";
import './router.scss'


export function Router() {

  return (
    <div className="router">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<EnterPage />} />
            <Route path="app" element={<AppPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
};

