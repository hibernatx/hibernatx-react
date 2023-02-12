import RoomMap from "./RoomMap";

function Map(props) {
    
    let roomMap;

    switch(props.room) {
        case "59-3229":
            roomMap = <RoomMap room="59-3229" cols="3" tableLength="4"/>
            break;
        case "59-2203":
            roomMap = <RoomMap room="59-2203" cols="2" tableLength="2"/>
            break;
        case "59-2213":
            roomMap = <RoomMap room="59-2213" cols="4" tableLength="6"/>
            break;
        default:
            roomMap = <RoomMap room="69-420" cols="3" tableLength="4"/> // might want to change this if we don't want any room displayed by default
    }
    
    return (
        <div>
            {roomMap}
        </div>
    )
}

export default Map;