import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Counter } from "./oldproj/counter/Counter";
import "./App.css";
import Background from "./components/helper/background/background";
import Header from "./components/header/header";

function App() {
  const sidebar = {
    type: 2,
    data: [],
  };
  return (
    <Background>
      <Router basename="/">
        <div id="grid">
          <div id="navbar">
            <Header sidebar={sidebar} />
          </div>
          <div id="content">
            {/* {localStorage.getItem("name")===null?<NameInput/>:<>
            <Content sidebar={[sidebar,setsidebar]}/>
            </>} */}
          </div>
          <div id="footer"></div>
        </div>
      </Router>
    </Background>
  );
}

export default App;
