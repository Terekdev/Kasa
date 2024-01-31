import React from 'react';
import Header from "../components/Layout/Header"
import HomeBanner from "../components/Home/HomeBanner"
import DisplayCards from "../components/Home/DisplayCards"
import Footer from "../components/Layout/Footer"

const Home = () => {
    return(
        <>
            <Header />
            <HomeBanner />
            <DisplayCards />
            <Footer />
        </>
    )
}

export default Home