import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/commen";
import { DiaryEditor } from "../components/diary";
import { BtnArrow } from "../components/feature";

const EditPage = ({initialData, onUpdate}) => {
    const { id } = useParams();
    const numericId = Number(id);

    const navigate = useNavigate();

    const [diary, setDiary] = useState({});

    useEffect(() => {
        fetchData(initialData);
    }, [id]);

    const fetchData = (data) => {
        const found = data.find(item => item.id === numericId);
        setDiary(found);
    }

    const handleClickBack = () => {
        navigate(-1);
    }

    const handleUpdate = (formData) => {
        onUpdate(numericId, formData)
        navigate(`/detail/${id}`);
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