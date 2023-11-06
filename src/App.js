import React from "react";
import { Route, Routes } from "react-router-dom";
import Clock from "./Component/Clock";
import StopWatch from "./Component/Stopwatch/StopWatch";
import NavBar from "./Component/NavBar";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/stopwatch" element={<StopWatch />} />
      </Routes>
    </>
  );
};
