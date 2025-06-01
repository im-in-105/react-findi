import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Result_room.css";

const RoommateResult = () => {
    const [profile, setProfile] = useState(null);
    const [resultList, setResultList] = useState([]);
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("roommateProfile");
        if (stored) {
            const parsed = JSON.parse(stored);
            setProfile(parsed);
            requestMatching(parsed);
        } else {
            alert("프로필이 입력되지 않았습니다.");
        }
    }, []);

    const genderText = (val) => (val === 0 ? "남성" : val === 1 ? "여성" : "알수없음");
    const lifePatternText = (val) => (val === 0 ? "아침형" : val === 1 ? "저녁형" : "알수없음");
    const smokingText = (val) => (val === 1 ? "흡연" : "비흡연");

    const requestMatching = async (profile) => {
        try {
            const response = await fetch("http://192.168.0.18:5000/handleMatch", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: profile.name,
                    gender: parseInt(profile.gender),
                    mbti: profile.mbti,
                    is_Smoking: parseInt(profile.isSmoking),
                    life_pattern: parseInt(profile.life_pattern),
                }),
            });

            if (!response.ok) {
                const text = await response.text();
                console.error("서버 응답 오류:", response.status, text);
                alert("매칭 요청 실패");
                return;
            }

            const result = await response.json();
            const normalized = (result.recommended || []).map((item) => ({
                name: item.name,
                gender: parseInt(item.gender),
                mbti: item.mbti,
                life_pattern: parseInt(item.life_pattern),
                isSmoking: item.isSmoking === true || parseInt(item.isSmoking) === 1,
                similarity: item.score ?? 0,
            }));

            setResultList(normalized);
        } catch (err) {
            console.error(err);
            alert("매칭 요청 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="roommate-wrapper">
            <div className="container left">
                {profile && (
                    <>
                        <h2>입력된 프로필</h2>
                        <table>
                            <tbody>
                            {Object.entries(profile).map(([key, value]) => (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>
                                        {key === "gender"
                                            ? genderText(Number(value))
                                            : key === "life_pattern"
                                                ? lifePatternText(Number(value))
                                                : key === "isSmoking"
                                                    ? smokingText(Number(value))
                                                    : value}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>

            <div className="container right">
                <h2>룸메이트 매칭 결과</h2>
                {resultList.length === 0 ? (
                    <p>추천 룸메이트가 없습니다.</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>선택</th>
                            <th>이름</th>
                            <th>성별</th>
                            <th>MBTI</th>
                            <th>생활패턴</th>
                            <th>흡연 여부</th>
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
                                            console.log("✅ 선택된 룸메이트:", item);
                                            alert("룸메이트 매칭을 완료하였습니다!");
                                            navigate("/");
                                        }}
                                    >
                                        {selected === idx ? "✔ 선택됨" : "선택"}
                                    </button>
                                </td>
                                <td>{item.name}</td>
                                <td>{genderText(item.gender)}</td>
                                <td>{item.mbti}</td>
                                <td>{lifePatternText(item.life_pattern)}</td>
                                <td>{smokingText(item.isSmoking)}</td>
                                <td>{(item.similarity * 100).toFixed(2)}%</td>
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
