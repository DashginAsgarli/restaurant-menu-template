import React from 'react'
import HeroSection from '../components/main/HeroSection'
import MenuSection from '../components/main/MenuSection'
import DiscoverMenu from '../components/main/DiscoverMenu'
import SpecialOfferBanner from '../components/main/SpecialOfferBanner'
import FoodApp from '../components/main/FoodApp'
import ExpertsAndApp from '../components/main/ExpertsAndApp'
import DealAndEvents from '../components/main/DealAndEvents'
import Rating from '../components/main/Rating'

function HomePage() {
    return (
        <>
            <HeroSection />
            <MenuSection />
            <DiscoverMenu />
            <SpecialOfferBanner />
            <FoodApp />
            <ExpertsAndApp />
            <DealAndEvents />
            <Rating />
        </>
    )
}

export default HomePage