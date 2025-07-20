import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './SeachKeyword.css';

const SeachKeyword = () => {
    const [keywords, setKeywords] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('/data/recommendKeywords.json');
                const recommendations = await response.data.recommendations;
                setKeywords(recommendations.slice(0, 5));
            } catch(error) {
                console.error('검색 키워드 데이터 로딩 실패 : ', error);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="SeachKeyword">
            <h3>추천 검색어</h3>
            <div className="keyword-list">
                <ul>
                    {keywords.map((keyword, i) => 
                        <li key={i}>
                            <span className="ranking">{i+1}.</span>
                            <span className="text"><Link to="">{keyword}</Link></span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SeachKeyword;