import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnProcess } from "../feature";
import "./DiaryDetail.css";

const WEATHER_ICONS = {
    sunny: '☀️',
    cloudy: '☁️',
    rainny: '🌧️'
};

const DiaryDetail = ({ diary, handleDelete }) => {
    const navigate = useNavigate();

    const formatTextWithBr = text => {
        const lines = (text ?? '').split('\n');
        return lines.map((line, idx) => (
            <React.Fragment key={idx}>
                {line}
                {idx < lines.length - 1 && <br />}
            </React.Fragment>
        ));
    }

    const handleClickEdit = () => {
        navigate(`/edit/${diary.id}`);
    }

    return (
        <div className="diary-detail">
            <div className="top">
                <div className="date">{diary.date}</div>
                <div className="weather">{WEATHER_ICONS[diary.weather]}</div>
            </div>
            <div className="content">{formatTextWithBr(diary.content)}</div>
            <div className="btns">
                <BtnProcess
                    text="삭제하기"
                    type="cancle"
                    handleClick={handleDelete}
                />
                <BtnProcess
                    text="수정하기"
                    type="primary"
                    handleClick={handleClickEdit}
                />
            </div>
        </div>
    )
}

export default DiaryDetail;