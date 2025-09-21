import logo from "./logo.svg";
import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./components/AppRoutes";
function App() {
  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
