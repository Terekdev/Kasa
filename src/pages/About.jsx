import React from 'react';
import Header from "../components/Layout/Header"
import AboutBanner from "../components/About/AboutBanner"
import AboutContent from "../components/About/AboutContent"
import Footer from "../components/Layout/Footer"

const About = () => {
    return(
        <>
            <Header />
            <AboutBanner />
            <AboutContent />
            <Footer />
        </>
    )
}

export default About