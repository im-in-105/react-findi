import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Result_room.css";

const RoommateForm = () => {
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

    const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchSession = async () => {
    //         try {
    //             const res = await fetch("/api/roommate/session-info", {
    //                 method: "GET",
    //                 credentials: "include"
    //             });
    //
    //             if (!res.ok) throw new Error(`서버 오류: ${res.status}`);
    //
    //             const data = await res.json();
    //             setFormData((prev) => ({
    //                 ...prev,
    //                 name: data.username || "",
    //                 email: data.email || "",
    //             }));
    //         } catch (err) {
    //             console.warn("세션 정보 불러오기 실패. 무시하고 계속 진행함.");
    //             // navigate("/term");  // 이 부분 주석처리 또는 제거
    //         }
    //     };
    //
    //     fetchSession();
    // }, [navigate]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //  Spring 서버에 저장
            const springResponse = await fetch("http://localhost:8080/api/roommate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    birth: formData.birth,
                    gender: parseInt(formData.gender),
                    student_id: formData.student_id,
                    mbti: formData.mbti,
                    major: formData.major,
                    is_Smoking: parseInt(formData.is_Smoking),
                    life_pattern: parseInt(formData.life_pattern),
                }),
            });

            if (!springResponse.ok) throw new Error("Spring 저장 실패");

            // 로컬스토리지에 저장
            localStorage.setItem("roommateProfile", JSON.stringify(formData));

            // 결과 페이지로 이동
            navigate("/roommate/match");

   } catch (error) {
        console.error("❌ 오류 발생:", error);
       alert("서버 오류 발생");
    }
     };

    return (
        <div className="roommate-wrapper">
            <div className="container left">
                <form onSubmit={handleSubmit}>
                    <h2>프로필 입력</h2>

                    {["name", "birth", "student_id", "major", "mbti"].map((field) => (
                        <div className="form-item" key={field}>
                            <label htmlFor={field}>{field}</label>
                            <input
                                name={field}
                                placeholder={field}
                                required
                                value={formData[field]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    <div className="form-item">
                        <label htmlFor="gender">성별</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="">선택하세요</option>
                            <option value="0">남성</option>
                            <option value="1">여성</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="life_pattern">생활 패턴</label>
                        <select name="life_pattern" value={formData.life_pattern} onChange={handleChange} required>
                            <option value="">선택하세요</option>
                            <option value="0">아침형</option>
                            <option value="1">저녁형</option>
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="is_Smoking">흡연 여부</label>
                        <select name="is_Smoking" value={formData.is_Smoking} onChange={handleChange} required>
                            <option value="">선택하세요</option>
                            <option value="0">비흡연</option>
                            <option value="1">흡연</option>
                        </select>
                    </div>
                    <button type="submit">매칭 요소 입력</button>
                </form>
            </div>
        </div>
    );
};

export default RoommateForm;
