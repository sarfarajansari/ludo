import 'antd/dist/antd.css';
import "react-dice-complete/dist/react-dice-complete.css";
import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Content from "./components/content.js/content"
import Background from './components/helper/backgrounds/background/background';
import ludo from './components/helper/Ludogame/ludo';


function App() {
  return (
    <Background>
      <Router basename="/ludo">
        <div id="grid">
          <div id="navbar"><Link to="/play/newgame/"><h2>PLAY</h2></Link> </div>
          <div id="content"><Content/></div>
          <div id="footer"></div>
        </div>
      </Router>
    </Background>
    
  );
}

export default App;
