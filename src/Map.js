import RoomMap from "./RoomMap";

function Map(props) {
    
let roomMap;

    switch(props.room) {
        case "59-3229":
            roomMap = <RoomMap cols={3} room="59-3223"/>
            break;
        case "59-2203":
            roomMap = <RoomMap cols={2} room="59-2203"/>
            break;
        case "59-2213":
            roomMap = <RoomMap cols={4} room="59-2213"/>
            break;
        default:
            roomMap = <RoomMap cols={2} room="69-420"/> // might want to change this if we don't want any room displayed by default
    }
    
    return (
        <div>
            {roomMap}
        </div>
    )
}

export default Map;