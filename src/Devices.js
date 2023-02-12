import ActionButton from "./ActionButton";
import './Devices.css'

function Devices(props) {

    const getNDevices = (room) => {
        switch (room) {
            case "59-3229":
                return 25;
            case "59-2203":
                return 40;
            case "59-2213":
                return 30;
            default:
                return 0;
        }
    }

    const room = props.room;
    const nDevices = getNDevices(room);
    const devices = room === "None" ? [] : [...Array(nDevices)].map((e, i) => `${room}-${i}`);

    const getStatus = (id) => {
        return "Inactive" // change this
    }

    return (
        <table className="devices-table">
            <tr>
                <th>Device ID</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {devices.map((e, i) =>
                <tr key={i}>
                    <th>{e}</th>
                    <th>{getStatus(e)}</th>
                    <th><ActionButton props={e} /></th>
                </tr>
            )}
        </table>
    )
}

export default Devices;