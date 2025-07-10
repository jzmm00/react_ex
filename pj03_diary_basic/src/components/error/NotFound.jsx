import { useNavigate } from "react-router-dom";
import { BtnProcess } from "../feature";
import "./NotFound.css";

const NotFound = ({comment}) => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/');
    }

    return (
        <div className="not-found">
            <p className="text">{comment}</p>
            <BtnProcess 
                text="홈으로 이동하기" 
                type="cancle" 
                handleClick={handleClickHome} 
            />
        </div>
    )
}

export default NotFound;