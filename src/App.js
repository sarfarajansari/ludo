import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Board from "./components/board/board"
function App() {
  return (
    <div id="grid">
      <div id="navbar"></div>
      <div id="content"><Board/></div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
