import './SeachForm.css';

const SeachForm = () => {
    return (
        <div className="SeachForm">
            <input type="text" name="searchInput" id="searchInput" placeholder='검색어를 입력해주세요.' />
            <button><img src="/images/icon_search.png" alt="검색창 열기" /></button>
        </div>
    )
}

export default SeachForm;