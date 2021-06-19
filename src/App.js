import 'antd/dist/antd.css';
import "react-dice-complete/dist/react-dice-complete.css";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Content from "./components/content.js/content"
function App() {
  return (
    <div id="grid">
      <div id="navbar"></div>
      <div id="content"><Content/></div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
