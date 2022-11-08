import React, { useState } from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { getCurrentUser, login, logout } from "../services/auth-service";
import { setConstantValue } from "typescript";

export const NavBar = () => {
    let token = localStorage.getItem("user");

    return (
        <div>
            <nav className="nav-ul">
                <li className="nav-li">
                    <NavLink className="nav-li-button" to="/">
                        Home
                    </NavLink>
                </li>
                {
                    token != null && (
                        <li className="nav-li">
                            <NavLink className="nav-li-button" to="/logout">
                                Logout
                            </NavLink>
                        </li>
                    )
                }
                {
                    token == null && (
                        <li className="nav-li">
                            <NavLink className="nav-li-button" to="/login">
                                Login
                            </NavLink>
                        </li>
                    )
                }
            </nav>
        </div>
    )
}