
const generateComputers = (room, start, length) => {
    for (let i = start; i < length; i++) {
        <div className="computer" id={`${room}-${i}`}></div>
    }
}

function Table(props) {

    return (
        <div className="table-container">
            <div className="computers-flex">{generateComputers(props.room, 0, props.length)}</div>
            <div className="actual-table"></div>
            <div className="computers-flex">{generateComputers(props.room, start, props.length * 2)}</div>
        </div>
    )
}

export default Table;