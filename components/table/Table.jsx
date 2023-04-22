import "./table.scss"
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

const List = () => {
  const rows = [
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SX522_.jpg",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
    },
    {
        id: 6456327,
        product: "Playstation 5",
        img: "https://m.media-amazon.com/images/I/61oweNff3IL._AC_SX679_.jpg",
        customer: "Michael Doe",
        date: "1 March",
        amount: 900,
        method: "Online Payment",
        status: "Pending",
    },
    {
        id: 8963572,
        product: "Razer Blade 15",
        img: "https://m.media-amazon.com/images/I/71L86H65iDL._AC_SX522_.jpg",
        customer: "Jane Smith",
        date: "1 March",
        amount: 920,
        method: "Online",
        status: "Approved",
    },
    {
        id: 4268921,
        product: "ASUS ROG Strix",
        img: "https://m.media-amazon.com/images/I/71pWcOnLL+L._AC_SX522_.jpg",
        customer: "Harold Carol",
        date: "1 March",
        amount: 2000,
        method: "Online",
        status: "Pending",
    },
  ];  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking ID</TableCell>
            <TableCell className="tablecell">Product</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Payment Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tablecell">{row.id}</TableCell>
              <TableCell className="tablecell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image"/>
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> 
      </Table>
    </TableContainer>
  )
}

export default List 
