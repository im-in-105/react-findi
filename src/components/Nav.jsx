// src/components/Nav.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Nav.css';

function Nav({ isAuthenticated = false }) {
    const navigate = useNavigate();

    return (
        <header>
            <nav className="navbar">
                <button
                    type="button"
                    className="logo"
                    style={{background: 'none', border: 'none'}}
                    onClick={() => navigate('/home')}
                >
                    <h1 className="logo-text">Findi</h1>
                </button>

                <div className="nav-items">
                    <button type="button" onClick={() => window.location.href = '/question?page=0'}>
                        고민상담
                    </button>
                    <button type="button" onClick={() => window.location.href = '/chatbot'}>
                        정보 알리미
                    </button>
                    <button type="button" onClick={() => window.location.href = '/roommate'}>
                        룸메이트 찾기
                    </button>
                </div>

                <div className="search-login">
                    <input type="search" placeholder="검색"/>

                    {isAuthenticated ? (
                        <a href="/member/logout" className="login-btn" style={{textDecoration: 'none'}}>
                            로그아웃
                        </a>
                    ) : (
                        <a href="/member/login" className="login-btn" style={{textDecoration: 'none'}}>
                            로그인
                        </a>
                    )}

                    <button
                        className="signup-btn"
                        onClick={() => navigate('/signup')}
                    >
                        회원가입
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
