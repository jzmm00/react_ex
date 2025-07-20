import { useState } from "react";
import { Link } from "react-router-dom";
import Gnb from './Gnb'
import { SeachWrap } from "../search";

import './Header.css';

function Header() {
    const [isSearch, setIsSearch] = useState(true);

    const handleToggleSearch = () => {
        setIsSearch(!isSearch);
        // 메모이제이션 필요없음. 단순히 true, false 교환하는 동작은 비용이 거의 안들기 때문.
        // 연산단위가 큰 영역에 대해서 메모이제이션 필요.
    }

    return (
        <header id='header'>
                <h1 className="logo"><Link to=''><img src='/images/metro_logo.png' alt='metrocity' /></Link></h1>
                <Gnb />
                <div className="utills">
                    <ul>
                        <li><Link to=''>login</Link></li>
                        <li><Link to=''>join</Link></li>
                        <li><Link to=''>cart(0)</Link></li>
                        <li className="btn-open-search">
                            <button onClick={handleToggleSearch}>
                                <img src="/images/icon_search.png" alt="검색창 열기" />
                            </button>
                        </li>
                    </ul>
                </div>
                {isSearch && <SeachWrap />}
        </header>
    )
}

export default Header;