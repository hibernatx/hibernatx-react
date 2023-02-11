function Table(props) {

    const room = props.room;
    const tableId = props.tableId;
    const tableLength = props.tableLength;

    const generateComputerList = (start) => {
        let computerList = [];

        for (let i = start; i < tableLength + start; i++) {
            let id = tableId * (tableLength * 2) + i;
            computerList.push(`${room}-${id}`);
        }

        return computerList;
    }

    const computerListLeft = generateComputerList(0);
    const computerListRight = generateComputerList(tableLength);

    return (
        <div className="table-container">
            <div className="computers-flex">
                {computerListLeft.map((e, i) => {
                    <div key={i} className="computer" id={e}></div>
            })}
            </div>
            <div className="actual-table"></div>
            <div className="computers-flex">
                {computerListRight.map((e, i) => {
                    <div key={i} className="computer" id={e}></div>
            })}
            </div>
        </div>
    )
}

export default Table;
