import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import { getToken, logout } from "../services/auth-service";
import { Home } from "./home-component";
import { LoginComponent } from "./login-component";
import { Logout } from "./logout-component";
import { NavBar } from "./navbar-component";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<><NavBar/> <Home /></>} />
      <Route path="/login" element={<><NavBar/> <LoginComponent /></>} />
      <Route path="/logout" element={<><NavBar/>  <Logout /></>} />
    </>
  )
);

export default router;