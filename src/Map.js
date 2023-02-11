import RoomMap from "./RoomMap";

function Map(props) {
    
let roomMap;

    switch(props.room) {
        case "59-3229":
            roomMap = <RoomMap cols="3"/>
            break;
        case "59-2203":
            roomMap = <RoomMap cols="2"/>
            break;
        case "59-2213":
            roomMap = <RoomMap cols="4"/>
            break;
        default:
            roomMap = <RoomMap cols="2"/> // might want to change this if we don't want any room displayed by default
    }
    
    return (
        <div>
            {roomMap}
        </div>
    )
}

export default Map;