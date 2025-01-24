import './App.css';
import myJs from './my.js';
import Home from './home.js';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const About = () => <h2>About Page</h2>;

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
  );
};

//console.log(<Home/>)
export default App;
myJs();