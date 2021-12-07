import './App.css';
import PreNavbar from './components/PreNavbar';
import { BrowserRouter as Router } from "react-router-dom"
import Slider from './components/Slider.js'
import {banner} from "./data/data.json"




function App() {
  return (
    <Router>
      <PreNavbar />
      <Slider start={banner.start}/>

    </Router>
  );
}

export default App;
