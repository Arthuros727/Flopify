import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ColorSchemesExample from "./Navbar.js";
import Request15 from "./requestalbum15.js";
import Test from "./test.js";
import App2 from "./app2.js";
import Detail from "./detailedAlbum.js";
import Genre from "./genre";
import Genre2 from "./genre2"


function App() {
  return (
    <Routes>
    <Route path='/' element={< App2 />} />
    <Route path='/Album' element={< Test />}/>
    <Route path='/detail' element={< Detail />}/>
    <Route path='/genre' element={< Genre />}/>
    <Route path='/albumGenre' element={< Genre2 />}/>


</Routes>
    
  );
}

export default App;
