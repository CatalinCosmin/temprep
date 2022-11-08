import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../services/auth-service"

export const Logout = () => {
    const navigate = useNavigate();
    logout();

    return (
        <>
        {navigate("/")}
        </>
    )
}