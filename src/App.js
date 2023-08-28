

import Footers from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MapComponent from './components/MapComponent';
// import Menu from './components/Menu';
// import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Header/>
      <MapComponent/>
      <Footers/> 
    </div>
  );
}

export default App;
