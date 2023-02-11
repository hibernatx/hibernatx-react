import './RoomMap.css';
import Table from './Table';

function RoomMap(props) {
  return (
    <div className="roommap-grid" style={`grid-template-columns: ${props.cols}`}>
      [...Array(props.cols)].map((e, i) => <Table room={props.room} length={props.tableLength} />)
    </div>
  )
}

export default RoomMap;