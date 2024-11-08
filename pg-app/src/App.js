import React, { Component } from "react";
import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PgList from "./components/pgs/PgList/PgList"
import AddPg from "./components/pgs/AddPg/AddPg";
import ViewPg from "./components/pgs/ViewPg/ViewPg";
import UpdatePg from "./components/pgs/UpdatePg/UpdatePg";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import Logout from "./components/Auth/Logout";
import axios from "axios";
import Home from "./components/Home";

axios.defaults.withCredentials = true;

let App=()=> {
  const {loggedIn} = useContext(AuthContext);
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path={"/"} element={<Home/>}/>
      {loggedIn == false && (<><Route path="/Register" element={<Register/>}/></>) }
      {loggedIn == false && (<><Route exact path="/Login" element={<Login/>}/></>)}
      <Route path={"/pg/list"} element={<PgList/>}/>
      <Route path={"/pg/add"} element={<AddPg/>}/>
      <Route path={"/pg/update"} element={<UpdatePg/>}/>
      <Route path={"/pg/view/:pgid"} element={<ViewPg/>}/>
    </Routes>
    </>
  );
}

export default App;
