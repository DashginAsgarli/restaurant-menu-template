import React from 'react'
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";

import HeroSection from "./components/main/HeroSection"
import Navbar from './components/header/navbar';
import MenuSection from './components/main/MenuSection';
import DiscoverMenu from './components/main/DiscoverMenu';
import SpecialOfferBanner from './components/main/SpecialOfferBanner'
import FoodApp from './components/main/FoodApp'
import ExpertsAndApp from './components/main/ExpertsAndApp'
import DealAndEvents from './components/main/DealAndEvents'
import Rating from './components/main/Rating';

import Footer from './components/footer/footer'
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
        <FoodApp />
        <ExpertsAndApp />
        <DealAndEvents />
        <Rating />
      </main>
      <footer>
        <Footer/>
      </footer>


      {/* <Routes>
        <Route path="/" element={<HeroSection />} />
      </Routes> */}
    </>
  )
}

export default App
