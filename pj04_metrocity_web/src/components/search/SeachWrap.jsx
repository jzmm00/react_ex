import { SeachForm, SeachKeyword, SeachBest } from "./index.js";
import './SeachWrap.css';

const SeachWrap = () => {
    return (
        <div className="SeachWrap">
            <div className="search-inner">
                <SeachForm />
                <div className="search-bottom">
                    <SeachKeyword />
                    <SeachBest />
                </div>
            </div>
        </div>
    )
}

export default SeachWrap;