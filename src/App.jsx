import React from 'react'
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";

import HomePage from "./layout/homePage"

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>


      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
