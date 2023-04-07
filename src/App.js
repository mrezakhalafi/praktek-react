// import logo from './logo.svg';
// import './App.css';
import 'bulma/css/bulma.css'
import Navbar from './components/Navbar' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Home from './components/Home'
import ViewData from './components/ViewData'
import AddData from './components/AddData'
import EditData from './components/EditData'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <section className="hero is-link has-text-centered">
          <div className="hero-body">
            <p className="title">
              Belajar React JS
            </p>
            <p className="subtitle">
              17 Feb 2023
            </p>
          </div>
        </section>
        <div className='container mt-5'>
          <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/ViewData" element={ <ViewData/> }></Route>
            <Route path="/AddData" element={ <AddData/> }></Route>
            <Route path="/EditData/:id" element={ <EditData/> }></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
