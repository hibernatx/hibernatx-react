import './style/Dropdown.css'

function Dropdown(props) {

    const rooms = [ {key: "59-3229", val: "B59 / 3229"}, {key: "59-2203", val: "B59 / 2203"}, {key: "59-2213", val: "B59 / 2213"} ];
    const setRoom = props.handleRoom;

    return (
        <div className="dropdown">
            <button className="dropbtn">Select room</button>
            <div className="dropdown-content">
                {rooms.map((i) => <div key={i.key} onClick={() => setRoom(i.key)}>{i.val}</div>)}
            </div>
        </div>
    )
}

export default Dropdown;