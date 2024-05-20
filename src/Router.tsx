import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { Layout } from "./pages/layout";
import { HomePage } from "./pages/home/home";
import { EnterPage } from "./pages/enter/enter";
import { AppPage } from "./pages/app/app";
import { ErrorPage } from "./pages/error/error";
import './router.scss'
import { useEffect, useState } from "react";
import { auth } from "./core/firebase/config";
import { userStore } from "./core/stores/userStore";


export function Router() {
  const logIn = userStore((state)=> state.logIn)
  useEffect(()=>{
    console.log('test')
    auth.onAuthStateChanged((user)=>{
      logIn(user)
      console.log({user})
      
    })
  },[])
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

