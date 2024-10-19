/*import logo from './logo.svg';*/
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Verification from './components/Verification';
import JobPosting from './components/JobPosting';

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verification />} />
      <Route path="/post-job" element={<JobPosting />} />
      {/* Add more routes as necessary */}
    </Routes>
  );
};
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;





