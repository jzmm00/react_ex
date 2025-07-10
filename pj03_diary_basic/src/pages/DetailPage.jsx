import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/commen";
import { DiaryDetail } from "../components/diary";
import { NotFound } from "../components/error";
import { BtnArrow } from "../components/feature";

const DetailPage = () => {
    const { id } = useParams();
    const numericId = Number(id);

    const navigate = useNavigate();

    const [diary, setDiary] = useState({});
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = () => {
        const data = sessionStorage.getItem('diary') || '[]';
        const diaryList = JSON.parse(data);
        const found = diaryList.find(item => item.id === numericId);
        if (!found) {
            setNotFound(true);
        } else {
            setDiary(found);
        }
    }

    const handleClickBack = () => {
        navigate(-1);
    }

    const handleClickDelete = () => {
        if (!window.confirm('해당 다이어리를 정말 삭제하시겠습니까?')) {
            return;
        }
        const data = sessionStorage.getItem('diary') || '[]';
        const diaryList = JSON.parse(data);
        const updatedList = diaryList.filter(item => item.id !== numericId);
        sessionStorage.setItem('diary', JSON.stringify(updatedList));
        navigate('/');
    };

    if (notFound) {
        return (
            <NotFound comment="요청하신 다이어리를 찾을 수 없습니다." />
        )
    } else {
        return (
            <>
                <Header
                    title={diary.title}
                    btnLeft={<BtnArrow
                        text={'이전 페이지로'}
                        className={'btn-prev'}
                        handleClick={handleClickBack}
                    />}
                />
                <DiaryDetail diary={diary} handleDelete={handleClickDelete} />
            </>
        )
    }
}

export default DetailPage;