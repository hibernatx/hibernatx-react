import './Dropdown.css'

function Dropdown(props) {
    return (
        <div className="dropdown">
            <button className="dropbtn">Select room</button>
            <div className="dropdown-content">
                <a href="59-3229">B59 / 3229</a>
                <a href="59-2203">B59 / 2203</a>
                <a href="59-2213">B59 / 2213</a>
            </div>
        </div>
    )
}

export default Dropdown;