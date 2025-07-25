import "./Header.css";

const Header = ({title, btnLeft, btnRight}) => {
    return(
        <header id="header">
            <h1 className="title">{title}</h1>
            {btnLeft}
            {btnRight}
        </header>
    )
}

export default Header;