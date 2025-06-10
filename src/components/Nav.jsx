import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        birth: "",
        student_id: "",
        major: "",
        mbti: "",
        life_pattern: "",
        is_Smoking: "",
    });

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // 세션 정보 불러오기
    useEffect(() => {
        const fetchSessionInfo = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/member/session-info", {
                    credentials: "include",
                });

                if (res.ok) {
                    const data = await res.json();
                    setFormData(prev => ({
                        ...prev,
                        name: data.username || "",
                        email: data.email || ""
                    }));
                } else {
                    console.warn("세션 정보 없음");
                    setFormData(prev => ({ ...prev, name: "", email: "" }));
                }
            } catch (error) {
                console.error("세션 불러오기 실패", error);
                setFormData(prev => ({ ...prev, name: "", email: "" }));
            }
        };

        fetchSessionInfo();
    }, []);

    // formData가 변경될 때 로그인 여부 판단
    useEffect(() => {
        setIsAuthenticated(!!formData.name && !!formData.email);
    }, [formData]);

    return (
        <header>
            <nav className="navbar">
                <button
                    type="button"
                    className="logo"
                    style={{ background: 'none', border: 'none' }}
                    onClick={() => navigate('/')}
                >
                    <h1 className="logo-text">Findi</h1>
                </button>

                <div className="nav-items">
                    <button type="button" onClick={() => (window.location.href = '/question?page=0')}>
                        고민상담
                    </button>
                    <button type="button" onClick={() => (window.location.href = '/chatbot')}>
                        정보 알리미
                    </button>
                    <button type="button" onClick={() => (window.location.href = '/roommate')}>
                        룸메이트 찾기
                    </button>
                    <form action="/calendar" method="get" style={{ display: 'inline' }}>
                        <button type="submit">학사일정 알리미</button>
                    </form>
                    <form action="/chat/room/0" method="get" style={{ display: 'inline' }}>
                        <button type="submit">대학 채팅방</button>
                    </form>
                </div>

                <div className="search-login">
                    <input type="search" placeholder="검색" />

                    {/* 로그인 / 로그아웃 버튼 */}
                    {isAuthenticated ? (
                        <a href="/member/logout" className="login-btn" style={{ textDecoration: 'none' }}>
                            로그아웃
                        </a>
                    ) : (
                        <a href="/member/login" className="login-btn" style={{ textDecoration: 'none' }}>
                            로그인
                        </a>
                    )}

                    {/* 회원가입은 항상 표시 */}
                    <button
                        className="signup-btn"
                        onClick={() => (window.location.href = '/signup')}
                    >
                        회원가입
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
