import { SeachForm, SeachKeyword, SeachBest } from "./index.js";
import './SeachWrap.css';

const SeachWrap = ({handleToggleSearch}) => {
    return (
        <div className="SeachWrap">
            <div className="search-inner">
                <SeachForm handleToggleSearch={handleToggleSearch} />
                <div className="search-bottom">
                    <SeachKeyword />
                    <SeachBest />
                </div>
            </div>
        </div>
    )
}

export default SeachWrap;