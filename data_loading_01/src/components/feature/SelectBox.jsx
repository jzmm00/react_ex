import "./SelectBox.css";

const SelectBox = ({ optionList, value, handleChange }) => {
    const handleChangeSelect = (e) => {
        handleChange(e.target.value);
    }

    return (
        <div className="select-box">
            <select value={value} onChange={handleChangeSelect}>
                {optionList.map((opt, idx) => 
                    <option key={idx} value={opt.value}>{opt.name}</option>
                )}
            </select>
        </div>
    )
}

export default SelectBox;