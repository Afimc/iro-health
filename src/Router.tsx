import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { Layout } from "./pages/layout";
import { HomePage } from "./pages/home/home";
import { EnterPage } from "./pages/enter/enter";
import { AppPage } from "./pages/app/app";
import { ErrorPage } from "./pages/error/error";
import './router.scss'
import { useEffect } from "react";
import { auth, logOut } from "./core/firebase/config";
import { userStore } from "./core/stores/userStore";


export function Router() {
  const logIn = userStore((state)=> state.logIn);
  const setUserEmail = userStore((state)=> state.setUserEmail);
  const setUserUID = userStore((state)=> state.setUserUID);
  useEffect(()=>{
    console.log('test')
    try {
      auth.onAuthStateChanged((user)=>{
        
        console.log({listenerUser:user})
        setUserEmail(user?.email||'')
        setUserUID(user?.uid||'')
        if (user === null){
         logOut()
        } else {
          logIn(user)
        }

        
      })
    } catch (error) {
      console.log(error)
    }
    
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

