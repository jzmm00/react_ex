import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SeachForm.css';

const SeachForm = ({handleToggleSearch}) => {
    const navigate = useNavigate();
    const [text, setText] = useState('');

    const handleChangeText = e => setText(e.target.value);
    const handleClickSubmit = () => {
        if(text.trim()){
            navigate(`/search?keyword=${text}`);
            handleToggleSearch();
        } else {
            alert('검색어를 입력해주세요.');
        }        
    }
    return (
        <div className="SeachForm">
            <input 
                type="text" 
                name="searchInput"
                id="searchInput" 
                placeholder='검색어를 입력해주세요.' 
                value={text}
                onChange={handleChangeText}
            />
            <button onClick={handleClickSubmit}>
                <img src="/images/icon_search.png" alt="검색 실행하기" />
            </button>
        </div>
    )
}

export default SeachForm; 