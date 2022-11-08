import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { debug } from 'console';
import { getCurrentUser, login } from './services/auth-service';
import { NavBar } from './components/navbar-component';
import { LoginComponent } from './components/login-component';
import { Home } from './components/home-component';
import { Logout } from './components/logout-component';

const App = () => {

  return(
    <div>
      <NavBar />
    </div>
  );
}

export default App;