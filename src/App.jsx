import React from 'react'
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";

import HeroSection from "./components/main/HeroSection"
import Navbar from './components/header/navbar';
import MenuSection from './components/main/MenuSection';
import DiscoverMenu from './components/main/DiscoverMenu';
import SpecialOfferBanner from './components/main/SpecialOfferBanner'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <MenuSection />
        <DiscoverMenu />
        <SpecialOfferBanner />
      </main>


      {/* <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes> */}
    </>
  )
}

export default App
