import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/commen";
import { DiaryEditor } from "../components/diary";
import { BtnArrow } from "../components/feature";

const CreatePage = () => {
    const navigate = useNavigate();

    const [diary, setDiary] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = () => {
        const data = sessionStorage.getItem('diary') || '[]';
        const diaryList = JSON.parse(data);
        setDiary(diaryList);
    }

    const handleClickBack = () => {
        navigate(-1);
    }

    const handleCreate = (newData) => {
        const newDiary = [...diary, newData];
        sessionStorage.setItem('diary', JSON.stringify(newDiary));
        navigate('/');
    }

    return (
        <div className="create-page">
            <Header
                title={'새로운 일기 쓰기'}
                btnLeft={<BtnArrow 
                            text={'이전 페이지로'} 
                            className={'btn-prev'} 
                            handleClick={handleClickBack} 
                        />}
            />
            <DiaryEditor onCreate={handleCreate} />
        </div>
    )
}

export default CreatePage;