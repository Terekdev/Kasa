import React from 'react';
import Header from "../components/Layout/Header"
import Error404 from "../components/NoMatch/Error404"
import Footer from "../components/Layout/Footer"

const NoReach = () => {
    return(
        <>
            <Header />
            <Error404 />
            <Footer /> 
        </>
    )
}

export default NoReach;