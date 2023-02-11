import "./Table.css";

const generateComputers = (room, start, length) => {
    for (let i = start; i < length; i++) {
        <div className="computer" id={`${room}-${i}`}></div>
    }
}

function Table(props) {

    return (
        <div className="table" style={{width: "auto", minHeight: "400px"}}>
            {/*
        <div className="table-container">
            <div className="computers-flex">{generateComputers(props.room, 0, props.length)}</div>
            <div className="actual-table"></div>
            <div className="computers-flex">{generateComputers(props.room, 0, props.length * 2)}</div>
        </div>
        */}
            {props.room}
        </div>
    )
}

export default Table;