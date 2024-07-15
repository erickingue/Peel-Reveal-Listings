import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import PredictForm from './components/PredictForm'
import EmployeeList from './components/EmployeeList'
import Login from './components/Login'
import { AuthProvider } from "./hooks/AuthContext";

const App = () => {
  
  //const [employees, setEmployees] = useState(employeesData);
  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">PSL</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4"></main>

        <div>
        <AuthProvider>
           <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/employees" element={<EmployeeList />} />
              <Route exact path="/predict" element={<PredictForm />} />
            </Routes>
          </AuthProvider>
        </div>
      </Router>
      
    </>
  );
};

export default App
