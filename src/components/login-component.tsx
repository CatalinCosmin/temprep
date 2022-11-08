import { STATUS_CODES } from "http";
import { useState } from "react";
import { Form, Navigate, redirect, useNavigate } from "react-router-dom";
import { login } from "../services/auth-service";
import '../App.css';

export const LoginComponent = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        let username = (event.currentTarget.elements[0] as HTMLInputElement).value;
        let password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    
        let statusCode = login(username, password);
        statusCode.then((value) => {
            console.log(value);
            if(value == 200)
            {
                navigate("/");
                // window.location.assign("http://localhost:3000/");
            }
        }).catch((err) => {
            console.log(err);
            setError(true);
        });
    }

    return (
        <Form className="table" onSubmit={handleLogin}>
            <h6>{error &&
            "Username or password is not valid."}</h6>
            <p className="table-row">
                <label className="table-cell" htmlFor="username"> <b>Username</b> </label>
                <input className="table-cell" type="text" placeholder="Enter username" name="username" required />
            </p>
            <p className="table-row">
                <label className="table-cell" htmlFor="password"> <b>Password</b> </label>
                <input className="table-cell" type="text" placeholder="Enter password" name="password" required />
            </p>
            <p className="table-row">
                <label className="table-cell"></label>
                <button className="table-cell form-submit" type="submit">Login</button>
            </p>
        </Form>
    );

    
}