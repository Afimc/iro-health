import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Router.css';
import { Layout } from "./pages/layout";
import { HomePage } from "./pages/home/home";
import { LoginPage } from "./pages/login/login";
import { AppPage } from "./pages/app/app";
import { ErrorPage } from "./pages/error/error";


export function Router() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="app" element={<AppPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

