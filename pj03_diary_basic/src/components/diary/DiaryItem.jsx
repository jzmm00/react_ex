import { Link } from "react-router-dom";
import "./DiaryItem.css";

// 대문자 :  “이 값은 변경되지 않는 상수(Constant)” 라는 의미를 직관적으로 드러내기 위함.
// 상수처럼 한 번 정의되면 코드 어디에서도 바뀌지 않는다는 걸 이름만 보고도 알 수 있게해서 불변성을 강조
// 환경변수와 같이 자주 바뀌지 않고 재사용되는 값에 대문자 처리.
const WEATHER_ICONS = {
    sunny : '☀️',
    cloudy : '☁️', 
    rainny: '🌧️'
};

const DiaryItem = ({ diary }) => {

    return (
        <li className="diary-item">
            <Link to={`/detail/${diary.id}`}>
                <div className="left">
                    <p className={`weather ${diary.weather}`}>{WEATHER_ICONS[diary.weather]}</p>
                    <p className="title">{diary.title}</p>
                </div>
                <p className="date">{new Date(diary.date).toLocaleDateString()}</p>
            </Link>
        </li>
    )
}

export default DiaryItem;