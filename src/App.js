import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Detail" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
