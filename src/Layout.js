import './Layout.css';
import { useState } from 'react';
import Dropdown from './Dropdown';
import Map from './Map';

function Layout(props) {

    const [room, setRoom] = useState("None");

    return (
        <div className='main-display'>
            <p>Room is {room}</p>
            <Dropdown handleRoom={() => setRoom}/>
            <Map room={room}/>
        </div>
    )
}

export default Layout;