import './Layout.css';
import { useState } from 'react';
import Dropdown from './Dropdown';
// import Map from './Map';
import Devices from "./Devices";

function Layout(props) {

    const rooms = { "59-3229": "Room B59 / 3229", "59-2203": "Room B59 / 2203", "59-2213": "Room B59 / 2213", "None": "No room selected" };
    const [room, setRoom] = useState("None");

    return (
        <div className='main-display'>
            <p>{rooms[room]}</p>
            <Dropdown handleRoom={setRoom}/>
            {/*<Map room={room}/>*/}
            <Devices room={room}/>
        </div>
    )
}

export default Layout;