import React from 'react';
import '../styles/Home.css';
import homeImg from '../assets/main.jpg';

function Home() {
    return (
        <div id="wrapper" className="divided">
            <section className="banner">
                <div className="content">
                    <button
                        type="button"
                        className="logo"
                        style={{ background: 'none', border: 'none', padding: 0 }}
                        onClick={() => navigate('/')}
                    >
                        <h1 className="logo-text">Findi</h1>
                    </button>
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
