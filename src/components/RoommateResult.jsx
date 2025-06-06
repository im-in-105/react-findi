import React, { useEffect, useState } from "react";
import "../styles/Result_room.css";
import { useNavigate } from "react-router-dom";

const RoommateResult = () => {
    const [resultList, setResultList] = useState([]);
    const [profile, setProfile] = useState(null);
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const genderText = (val) => (val === "0" || val === 0 ? "남성" : "여성");
    const lifePatternText = (val) => (val === "0" || val === 0 ? "아침형" : "저녁형");
    const smokingText = (val) => (val === "1" || val === 1 ? "흡연" : "비흡연");

    useEffect(() => {
        const stored = localStorage.getItem("roommateProfile");

        if (!stored) {
            alert("❌ 프로필 정보 없음. 홈으로 이동합니다.");
            navigate("/"); // ✅ 렌더링 중이 아닌 useEffect 안에서 navigate 사용
            return;
        }

        const parsed = JSON.parse(stored);
        setProfile(parsed);

        const fetchMatch = async () => {
            try {
                const res = await fetch("http://192.168.0.18:5000/handleMatch", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: parsed.name,
                        gender: parseInt(parsed.gender),
                        mbti: parsed.mbti,
                        is_Smoking: parseInt(parsed.is_Smoking),
                        life_pattern: parseInt(parsed.life_pattern),
                    }),
                });

                if (!res.ok) throw new Error("매칭 실패");

                const result = await res.json();
                setResultList(result.recommended || []);
            } catch (err) {
                console.error("❌ 매칭 요청 중 오류:", err);
                alert("Flask 서버 연결 실패");
            }
        };

        fetchMatch();
    }, [navigate]); // ✅ navigate 함수 자체만 dependency로 넣음 (navigate() X)

    return (
        <div className="roommate-wrapper">
            <div className="container left">
                <h2>입력된 프로필</h2>
                {profile && (
                    <table>
                        <tbody>
                        <tr><th>name</th><td>{profile.name}</td></tr>
                        <tr><th>gender</th><td>{genderText(profile.gender)}</td></tr>
                        <tr><th>birth</th><td>{profile.birth}</td></tr>
                        <tr><th>student_id</th><td>{profile.student_id}</td></tr>
                        <tr><th>major</th><td>{profile.major}</td></tr>
                        <tr><th>mbti</th><td>{profile.mbti}</td></tr>
                        <tr><th>life_pattern</th><td>{lifePatternText(profile.life_pattern)}</td></tr>
                        <tr><th>isSmoking</th><td>{smokingText(profile.is_Smoking)}</td></tr>
                        </tbody>
                    </table>
                )}
            </div>

            <div className="container right">
                <h2>룸메이트 매칭 결과</h2>
                {resultList.length === 0 ? (
                    <p>추천 없음</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>선택</th>
                            <th>이름</th>
                            <th>MBTI</th>
                            <th>전공</th>
                            <th>학번</th>
                            <th>흡연</th>
                            <th>생활패턴</th>
                            <th>정확도</th>
                        </tr>
                        </thead>
                        <tbody>
                        {resultList.map((item, idx) => (
                            <tr key={idx} className={selected === idx ? "selected-row" : ""}>
                                <td>
                                    <button
                                        onClick={() => {
                                            setSelected(idx);
                                            alert("룸메이트 매칭 완료!");
                                        }}
                                    >
                                        {selected === idx ? "✔ 선택됨" : "선택"}
                                    </button>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.mbti}</td>
                                <td>{item.major}</td>
                                <td>{item.student_id}</td>
                                <td>{smokingText(item.is_Smoking)}</td>
                                <td>{lifePatternText(item.life_pattern)}</td>
                                <td>{(item.score * 100).toFixed(2)}%</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default RoommateResult;
