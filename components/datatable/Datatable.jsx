import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColums, userRows } from "../../datatablesource";
import {Link} from 'react-router-dom';
const Datatable = () => {
    const actionColum = [
        {
            field: "action", 
            headerName: "Action", 
            width: 200, 
            renderCell:()=> {
                return(
                    <div className="cellAction">
                        <Link to="/users/test" style={{textDecoration: "none"}}>
                            <div className="viewButton">View</div>
                        </Link>
                        <Link to="/users" style={{textDecoration: "none"}}>
                            <div className="deleteButton">Delete</div>
                        </Link>     
                    </div>
                )
            }
        }];
  return (
    <div className="datatable">
        <div className="datatableTitle">
            Add New User 
            <Link 
                to="/users/new"                 
                className="link"
            >
                Add New
            </Link>
        </div>
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
