import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/commen";
import { BtnArrow } from "../components/feature";
import { DiaryList } from "../components/diary";
import { SelectBox } from "../components/feature"

import "./ListPage.css";

// 모두 대문자 처리해 “변경 불가능한 설정값”이라는 의미를 분명히 전달
// 너무 남발하면 일반 변수와 혼동될 수 있음. 
// 체크!
// 이 값이 정말 애플리케이션 실행 중 변경되지 않는지?
// 절대 불변이라면 UPPER_SNAKE_CASE, 그렇지 않다면 camelCase로 선언
// 상수 선언은 모듈 최상단에 배치해 가시성 높이기
const SORT_OPTION_LIST = [
    { value: 'latest', name: '최신 순' },
    { value: 'oldest', name: '오래된 순' }
];

const FILTER_OPTION_LIST = [
    { value: 'all', name: '전체' },
    { value: 'sunny', name: '맑음' },
    { value: 'cloudy', name: '흐림' },
    { value: 'rainy', name: '비' }
];

const ListPage = ({initialData}) => {
    const [diaryData, setDiaryData] = useState([]);
    const [nowDate, setNowDate] = useState(new Date());
    const displayToday = nowDate.toLocaleDateString();

    const [currentSort, setCurrentSort] = useState(SORT_OPTION_LIST[0].value);
    const [currentFilter, setCurrentFilter] = useState(FILTER_OPTION_LIST[0].value);

    useEffect(() => {
        filteredDiary(initialData);
    }, [initialData, nowDate]);

    const handleClickPrev = () => {
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, nowDate.getDate()));
    }

    const handleClickNext = () => {
        setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate()));
    }

    const filteredDiary = (data) => {
        const firstDay = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
        const lastDay = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1);
        setDiaryData(data.filter(diary => new Date(diary.date) >= firstDay && new Date(diary.date) < lastDay));
    }

    const getFilterChange = () => {
        const data = diaryData;
        const filterList = data.filter(diary =>
            currentFilter === 'all'
                ? true
                : diary.weather === currentFilter
        );
        const sortList = filterList.sort((a, b) => {
            if (currentSort === 'latest') {
                return new Date(b.date) - new Date(a.date);
            } else {
                return new Date(a.date) - new Date(b.date);
            }
        })
        return sortList;
    }

    const filterSortList = getFilterChange();

    return (
        <div className="list-page">
            <Header
                title={displayToday}
                btnLeft={
                    <BtnArrow
                        text={'이전 달'}
                        className={'btn-prev'}
                        handleClick={handleClickPrev}
                    />
                }
                btnRight={
                    <BtnArrow
                        text={'다음 달'}
                        className={'btn-next'}
                        handleClick={handleClickNext}
                    />
                }
            />
            <div className="page-top">
                <div className="total">총 {filterSortList.length}개</div>
                <div className="select-area">
                    <SelectBox
                        optionList={SORT_OPTION_LIST}
                        value={currentSort}
                        handleChange={setCurrentSort}
                    />
                    <SelectBox
                        optionList={FILTER_OPTION_LIST}
                        value={currentFilter}
                        handleChange={setCurrentFilter}
                    />
                </div>
            </div>
            <DiaryList diaryData={filterSortList} />
            <div className="goNew">
                <Link to={'/new'}>
                    <img src="/img/ico-write.png" alt="새 글쓰기" />
                </Link>
            </div>
        </div>
    )
}

export default ListPage;