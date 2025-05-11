import React, {  } from 'react';
import '../styles/Details.css';
import img1 from '../assets/community.png';
import img2 from '../assets/chatbot.png';
import img3 from '../assets/roommate.png';

function Details() {
    return (
        <div className="highlights">
            <section>
                <div className="content">
                    <header><img src={img1} alt="icon" className="icon-img"/>
                        <h3>Community</h3>
                    </header>
                    <p>고민상담 커뮤니티 기능은 사용자가 고민을 등록하고, 타인의 고민에 댓글을 통해 상호 소통할 수 있도록 지원하는 게시판 기반의 상호작용형 커뮤니케이션 모듈입니다.</p>
                    <button className="cta-button">더 알아보기</button>
                </div>
            </section>
            <section>
                <div className="content">
                    <header><img src={img2} alt="icon" className="icon-img"/>
                        <h3>Chatbot</h3>
                    </header>
                    <p>사용자가 궁금한 대학교 정보(학과, 교수, 단과대학, 장학금, 기타 ..)를 실시간으로 검색해, 결과를 가져와 답변해주는 스마트 캠퍼스 챗봇입니다.</p>
                    <button className="cta-button">더 알아보기</button>
                </div>
            </section>
            <section>
                <div className="content">
                    <header><img src={img3} alt="icon" className="icon-img"/>
                        <h3>Roommate</h3>
                    </header>
                    <p>생활 스타일과 성향을 바탕으로 최적의 룸메이트를 매칭해주는 스마트 기숙사 룸메이트 매칭 시스템입니다. 마음에 드는 상대를 선택하면 자동으로 메일이 전송됩니다.</p>
                    <button className="cta-button">더 알아보기</button>
                </div>
            </section>
        </div>
    );
}

export default Details;
