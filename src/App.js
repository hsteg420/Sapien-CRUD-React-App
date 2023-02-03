import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./utils/Home";
import Header from "./utils/Header";
import About from "./utils/About";
import AddModal from "./leads/AddModal";
import EditLead from "./leads/EditLead";
import User from "./leads/User";

import Error from "./utils/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/user/add" element={<AddModal/>} />
          <Route path="/users/edit/:id" element={<EditLead/>} />
          <Route path="/users/:id" element={<User/>} />

          <Route path="*" element={<Error/>} />
          </Routes>
      </div>
    </Router>
  );
} 

export default App;
