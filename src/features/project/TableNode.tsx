import { Table } from "../../../electron/types/Model.type";

function TableNode({data} : {data : Table}){
    return <div>{data.name}</div>
}

export default TableNode;