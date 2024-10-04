import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import DataFetcher from './pages/DataFetch'
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <div className="app">
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li> 
          <li><Link to="/DataFetch">Data Fetching</Link></li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/DataFetch" element={<DataFetcher/>}></Route>
    </Routes>
   </BrowserRouter>

  );
}

export default App;
