import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "../node_modules/sal.js/dist/sal.css";
import "react-slideshow-image/dist/styles.css";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import Shipment from "./pages/Shipments";
import Logistics from "./pages/Logistics";
import WorkPlans from "./pages/Workplans";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/shipments" element={<Shipment />} />
      <Route path="/logistics" element={<Logistics />} />
      <Route path="/workplans" element={<WorkPlans />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
}

export default App;
