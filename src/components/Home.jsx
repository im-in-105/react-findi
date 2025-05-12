import React from 'react';
import '../styles/Home.css';
import homeImg from '../assets/main.jpg';

function Home() {
    return (
        <div id="wrapper" className="divided">
            <section className="banner">
                <div className="content">
                    <h1>Let's Findi</h1>
                    <p>학교생활의 모든 것, 한곳에서 연결하다.</p>
                    <ul className="actions">
                        <li><a href="#first" className="button">Get started</a></li>
                    </ul>
                </div>
                <div className="image">
                    <img src={homeImg} alt="Illustration of people" />
                </div>
            </section>
        </div>
    );
}

export default Home;
