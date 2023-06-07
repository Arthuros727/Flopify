import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ColorSchemesExample from "./Navbar.js";
import Request15 from "./requestalbum15.js";
import Test from "./test.js";
import App2 from "./app2.js";


function App() {
  return (
    <Routes>
    <Route path='/' element={< App2 />} />
    <Route path='/Album' element={< Test />}/>
</Routes>
    
  );
}

export default App;
