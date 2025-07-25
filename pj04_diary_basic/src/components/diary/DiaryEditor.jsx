import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WeatherItem, BtnProcess } from "../feature";
import "./DiaryEditor.css";

const WEATHER_LIST = [
    {
        value: 'sunny',
        label: '맑음',
        icon: '☀️'
    },
    {
        value: 'cloudy',
        label: '흐림',
        icon: '☁️'
    },
    {
        value: 'rainny',
        label: '비',
        icon: '🌧️'
    }
]

const DiaryEditor = ({ isEdit, onCreate, onUpdate, data }) => {
    const navigate = useNavigate();

    const todayString = new Date().toISOString().slice(0, 10);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(todayString);
    const [weather, setWeather] = useState('sunny');
    const [content, setContent] = useState('');

    const titleRef = useRef();
    const contentRef = useRef();
    const titelNotiRef = useRef();
    const contentNotiRef = useRef();

    useEffect(() => {
        if (isEdit && data.id) {
            // ?? null 병합 연산자. 
            setTitle(data.title ?? '');
            setDate(data.date ?? todayString);
            setWeather(data.weather ?? 'sunny');
            setContent(data.content ?? '');
        }
    }, [isEdit, data]);

    const handleChangeTitle = (e) => {
        titelNotiRef.current.style.display = 'none';
        setTitle(e.target.value);
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value);
    }

    const handleClickWeather = (state) => {
        setWeather(state);
    }

    const handleChangeContent = (e) => {
        contentNotiRef.current.style.display = 'none';
        setContent(e.target.value);
    }

    const handleClickCancle = () => {
        if (confirm('작성을 취소하시겠습니까?')) {
            navigate(-1);
        }
    }

    const handleClickSubmit = () => {
        if (!title.trim() && !content.trim()) {
            titelNotiRef.current.style.display = 'block';
            contentNotiRef.current.style.display = 'block';
            titleRef.current.focus();
            return;
        } else if (!title.trim()) {
            titelNotiRef.current.style.display = 'block';
            titleRef.current.focus();
            return;
        } else if (!content.trim()) {
            contentNotiRef.current.style.display = 'block';
            contentRef.current.focus();
            return;
        }

        const id = isEdit&&data.id ? data.id : new Date().getTime();
        const formData = {
            id,
            title,
            date,
            weather,
            content
        }

        if (confirm(isEdit ? '수정을 완료하시겠습니까?' : '작성을 완료하시겠습니까?')) {
            if (isEdit) {
                onUpdate(formData);
            } else {
                onCreate(formData);
            }
        }
        
        navigate('/');
    }

    return (
        <div className="diary-editor">
            <div className="title">
                <h3>제목</h3>
                <p>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChangeTitle}
                        placeholder="제목을 입력해주세요"
                        ref={titleRef}
                    />
                </p>
                <p className="noti" ref={titelNotiRef}>제목을 반드시 입력해주세요.</p>
            </div>
            <div className="date">
                <h3>날짜</h3>
                <p>
                    <input
                        type="date"
                        name="date"
                        value={date}
                        onChange={handleChangeDate}
                        placeholder="날짜를 입력해주세요"
                    />
                </p>
            </div>
            <div className="weather">
                <h3>날씨</h3>
                <ul>
                    {WEATHER_LIST.map(item =>
                        <WeatherItem
                            key={item.value}
                            item={item}
                            handleClick={handleClickWeather}
                            isActive={item.value === weather}
                        />
                    )}
                </ul>
            </div>
            <div className="content">
                <h3>내용</h3>
                <p>
                    <textarea
                        type="text"
                        name="content"
                        value={content}
                        onChange={handleChangeContent}
                        placeholder="내용을 입력해주세요"
                        ref={contentRef}
                    ></textarea>
                </p>
                <p className="noti" ref={contentNotiRef}>내용을 반드시 입력해주세요.</p>
            </div>
            <div className="processBtn">
                <BtnProcess
                    text="취소하기"
                    type="cancle"
                    handleClick={handleClickCancle}
                />
                <BtnProcess
                    text="저장하기"
                    type="primary"
                    handleClick={handleClickSubmit}
                />
            </div>
        </div>
    )
}

export default DiaryEditor;