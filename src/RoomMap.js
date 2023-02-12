import './RoomMap.css';
import Table from './Table';

function RoomMap(props) {

  let tables = [...Array(props.cols)].map((e, i) =>
    <Table key={i} room={props.room} tableId={props.i} tableLength={props.tableLength}/>
  )

  return (
    <div className="roommap-grid" style={{gridTemplateColumns: `repeat(${props.cols}, 1fr)`}}>
      {tables}
    </div>
  )
}

export default RoomMap;