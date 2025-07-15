import "./Button.css";

export const BtnArrow = ({text, className, handleClick}) => {
    return(
        <p className={className}>
            <button onClick={handleClick}>
                <span className="hide">{text}</span>
            </button>
        </p>
    )
}

export const BtnProcess = ({text, type, handleClick}) => {
    return(
        <p className={`btn-process ${type}`}>
            <button onClick={handleClick}>{text}</button>
        </p>
    )
}