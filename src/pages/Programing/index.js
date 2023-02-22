import React from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Hero from "../Home/Hero";
import './style.scss'

function Programming() {

    return (
        <div>
            <Menu />
            <br/>
            <br/>
            <Hero/>
            <br/>
            <br/>
            <div>
                <h2>O que vamos fazer hoje?</h2>
            </div>
            <Footer/>
        </div>
    )
}

export default Programming;


