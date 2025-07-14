import { useNavigate } from "react-router-dom"
import { BtnProcess } from "../components/feature"

const HomePage = () => {
    const navigate = useNavigate();
    const handleClickGoList = () => {
        navigate('/list');
    }

    return(
        <div className="home-page">
            방문을 환영합니다. 
            <BtnProcess 
                text="시작하기"
                type="primary"
                handleClick={handleClickGoList}
            />
        </div>
    )
}

export default HomePage;