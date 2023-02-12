import './style/ActionButton.css'
import {useState} from "react";

function ActionButton(props) {

    const [status, setStatus] = useState(false);

    const wakeUpComputer = () => {
        fetch('http://192.168.223.211:8000', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "command": "PCPBookPC",
                "room": props.room,
                "pc": props.pcid,
            })
        }).then(resp => {
            if (resp.ok) {
                return resp.json()
            } else {
                console.log("Status: " + resp.status)
                return Promise.reject("server")
            }
        }).then(dataJson => {
            console.log(dataJson);
            if (dataJson["result"] === "success") {
                setStatus(true);
            }
        })
    }

    const getStatus = () => {
        fetch('http://192.168.223.211:8000', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "command": "PCPGetStatus",
                "room": props.room,
            })
        }).then(resp => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                console.log("Status: " + resp.status)
                return Promise.reject("server")
            }
        }).then(dataJson => {
            // console.log(dataJson);
            console.log(JSON.parse(dataJson));

            let newjson = JSON.parse(dataJson);

            if (newjson["result"] === "success") {
                if (newjson["status"][props.pcid] === "on") {
                    setStatus(true);
                }
            } else {
                setStatus(false);
            }
        })
    }

    getStatus();

    return(
        <button onClick={() => wakeUpComputer()} style={{backgroundColor: status ? "#bbbbbb" : "#93BFCF"}} className="action-button">Turn on</button>
    )
}

export default ActionButton;