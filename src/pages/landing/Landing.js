import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../images/coffee-940x788.png';

const Landing = () => {


    return (
        <section className="landing">
            <div className="loading-content">
                <div className="logo">
                    <img src={logoImg} alt="CoffeeK" />
                    <h2>کافیک</h2>
                </div>
                <div className="buttons">
                    <button id="download-app">دانلود اپلیکشن</button>
                    <Link to={"/home"} id="go-to-site">رفتن به سایت</Link>
                </div>
            </div>
            <div id="wave">
                <div className="wave1"></div>
                <div className="wave2"></div>
            </div>
        </section>
    )
}

export default Landing;