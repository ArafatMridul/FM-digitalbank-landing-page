import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hub from "./components/Hub";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Hub />
            <Articles />
            <Footer />
        </>
    );
};

export default App;
