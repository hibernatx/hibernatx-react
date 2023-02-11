import './RoomMap.css';
import Table from './Table';

function RoomMap(props) {
  let tables = [...Array(props.cols)].map((e, i) =>
      <Table key={i} room={props.room} length={props.cols}/>
  );

  console.log(tables.length);

  return (
    <div className="roommap">
      {tables}
    </div>
  )
}

export default RoomMap;