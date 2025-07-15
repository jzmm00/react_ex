import "./WeatherItem.css";

const WeatherItem = ({item, handleClick, isActive}) => {
    return(
        <li className={`weather-item ${isActive?'active': ''}`}>            
            <p className={item.value}>
                <button onClick={() => {handleClick(item.value)}}>
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.label}</span>
                </button>
            </p>
        </li>
    )
}

export default WeatherItem;