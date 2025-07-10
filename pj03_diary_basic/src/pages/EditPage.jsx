import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/commen";
import { DiaryEditor } from "../components/diary";
import { BtnArrow } from "../components/feature";

const EditPage = () => {
    const { id } = useParams();
    const numericId = Number(id);

    const navigate = useNavigate();

    const [diary, setDiary] = useState({});

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

    const handleUpdate = () => {
        console.log('수정하기');
    }

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
            <DiaryEditor
                isEdit={true}
                onUpdate={handleUpdate}
                data={diary}
            />
        </>
    )
}

export default EditPage;