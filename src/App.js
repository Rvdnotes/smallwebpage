import React from "react";
import "./App.css";
import Home from '../src/Component/Pages/Home'
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Navbar from "./Component/Pages/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./Component/Pages/Login";
// import SideNavbar from "./Component/SideNavbar";
// import Dashboard from "./Component/Pages/Sidebar/Dashboard";
// import Message from "./Component/Pages/Sidebar/Message";
// import Setting from "./Component/Pages/Sidebar/Setting";
// import Notification from "./Component/Pages/Sidebar/Notification";


function App() {
  return (
    <>
    <div>
       
      
      <Router>

        <Navbar/>
       {/* <SideNavbar/> */}


        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Login" element={<Login/>}/>
            {/* <Route path="/DashBoard" element={<Dashboard/>}/>
            <Route path="/Notification" element={<Notification/>}/>
            <Route path="/Message" element={<Message/>}/>
            <Route path="/Setting" element={<Setting/>}/> */}

        </Routes>
      </Router>
     
    </div>

     <div>
      
     </div>
    </>
  );
}

export default App;
