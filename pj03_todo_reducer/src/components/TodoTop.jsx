const TodoTop = () => {
    let today = new Date().toLocaleDateString('ko-Kr');

    return (
        <div id="top">
            <h2>오늘 날짜</h2>
            <p className="todoy">{today}</p>
        </div>
    )
}

export default TodoTop;