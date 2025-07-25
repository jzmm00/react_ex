import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = ({ diaryData }) => {
    return (
        <div className="diary-list">
            {
                diaryData.length === 0
                    ? <p className="noData">해당하는 일기가 없습니다.</p>
                    : <ul>
                        {
                            diaryData.map(diary => <DiaryItem key={diary.id} diary={diary} />)
                        }
                    </ul>
            }
        </div>
    )
}

export default DiaryList;