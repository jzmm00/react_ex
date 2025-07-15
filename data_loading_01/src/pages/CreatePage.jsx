import { useNavigate } from "react-router-dom";

import { Header } from "../components/commen";
import { DiaryEditor } from "../components/diary";
import { BtnArrow } from "../components/feature";

const CreatePage = () => {
    // const navigate = useNavigate();

    // const handleClickBack = () => {
    //     navigate(-1);
    // }

    return (
        <div className="create-page">
            {/* <Header
                title={'새로운 일기 쓰기'}
                btnLeft={<BtnArrow 
                            text={'이전 페이지로'} 
                            className={'btn-prev'} 
                            handleClick={handleClickBack} 
                        />}
            />
            <DiaryEditor onCreate={onCreate} /> */}
            create
        </div>
    )
}

export default CreatePage;