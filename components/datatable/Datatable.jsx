import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColums, userRows } from "../../datatablesource";

const Datatable = () => {
    const actionColum = [
        {
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell:()=> {
                return(
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div> 
                    </div>
                )
            }
        }];
  return (
    <div className="datatable">
        <DataGrid
            rows={userRows}
            columns={userColums.concat(actionColum)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
      />
    </div>
  )
}

export default Datatable
