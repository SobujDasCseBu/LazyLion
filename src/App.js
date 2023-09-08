/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import About from "./pages/About.js";

const MainLayout = ({ title, setTitle }) => <>{/* <NavBar /> */}</>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
