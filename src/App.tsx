import { Navbar } from "./components/navbar";
import { Application } from "./components/sidebar";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Table from "./pages/Table"; // lib para usar icones como url
// https://icons8.com.br/icons/set/editar

const App = () => {
  return (
    <>
      <Navbar />
      <Application />
      <Router>
        <Routes>
          <Route path="/tabela" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
