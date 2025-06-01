import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Result_room.css";

const RoommateForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        birth: "",
        student_id: "",
        major: "",
        mbti: "",
        life_pattern: "",
        isSmoking: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("roommateProfile", JSON.stringify(formData));
        navigate("/roommate/match");
    };

    return (
        <div className="roommate-wrapper">
            <div className="container left">
                <form onSubmit={handleSubmit}>
                    <h2>프로필 입력</h2>
                    {/* 동일한 form-item들 복사 */}
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
                        <label htmlFor="isSmoking">흡연 여부</label>
                        <select name="isSmoking" value={formData.isSmoking} onChange={handleChange} required>
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
