import React, { useEffect, useState } from 'react';
import '../styles/Etcetera.css';
import user from '../assets/user.png';
function Etcetera() {
    return (
        <div className="content-grid">
            <div className="grid-section">
                <h2>Notice</h2>
                <ul className="contact-info">
                    <li>
                        <img src={user} alt="이지민"/>
                        <div>
                            <b>컴퓨터소프트웨어공학과 이지민</b>
                            <br/>학번: 20223101<br/>번호: 010-6865-7521<br/>이메일: jiminlee.033@gmail.com
                        </div>
                    </li>
                    <li>
                        <img src={user} alt="강민정"/>
                        <div>
                            <b>컴퓨터소프트웨어공학과 강민정</b>
                            <br/>학번: 20223134<br/>번호: 010-3065-3989<br/>이메일: alswjd031005@naver.com
                        </div>
                    </li>
                    <li>
                        <img src={user} alt="원채연"/>
                        <div>
                            <b>컴퓨터소프트웨어공학과 원채연</b>
                            <br/>학번: 20223160<br/>번호: 010-5299-5539<br/>이메일: wcy3491@gmail.com
                        </div>
                    </li>
                </ul>
            </div>
            <div className="grid-section">
                <h2>Location</h2>
                <ul>
                    <li>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.6059082881065!2d129.030956211986!3d35.14150687265281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebb1648cdd27%3A0x25e803eecc5c3eff!2z64-Z7J2Y64yA7ZWZ6rWQIOqwgOyVvOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1746629341614!5m2!1sko!2skr"
                            width="600"
                            height="450"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </li>
                    <li>
                        부산광역시 부산진구 엄광로 176 | 동의대학교 가야캠퍼스
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Etcetera;
