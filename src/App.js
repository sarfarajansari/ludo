import React, { useState,useEffect } from 'react'
import 'antd/dist/antd.css';
import "./components/helper/typography/typography.css";
import "react-dice-complete/dist/react-dice-complete.css";
import "./App.css";
import {  HashRouter as Router, Link } from "react-router-dom";
import Content from "./components/content.js/content"
import Background from './components/helper/backgrounds/background/background';
import Header from './components/header/header'
import useForceUpdate from "./components/helper/forceupdate"
import NameInput from './components/helper/namesetter/name'

function App() {
  const forceUpdate =useForceUpdate()
  const [sidebar, setsidebar] = useState({
    type:0,
    data:[]
  })
  const [name, setname] = useState("")
  useEffect(() =>setInterval(forceUpdate,10),[])
  return (
    <Background>
      <Router basename="/">
        <div id="grid">
          <div id="navbar"><Header sidebar={sidebar}/></div>
          <div id="content">
            {localStorage.getItem("name")===null?<NameInput/>:<>
            <Content sidebar={[sidebar,setsidebar]}/>
            </>}
          </div>
          <div id="footer"></div>
        </div>
      </Router>
    </Background>
    
  );
}

export default App;
