import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import FeatureSection from './components/FeatureSection';
import Category from './components/Category'
import LearningWay from './components/LearningWay'
import FreeContent from './components/FreeContent'
import Testimonials from './components/Testimonials'
import ImageSwiper from './components/ImageSwiper'

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden touch-pan-y">
      <Nav />
      <main className="flex-1">
        <Hero/>
        <AboutSection/>
        <FeatureSection/>
        <Category/>
        <LearningWay/>
        <FreeContent/>
        <Testimonials/>
        <ImageSwiper/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
