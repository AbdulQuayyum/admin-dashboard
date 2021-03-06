import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "IPhone 12",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPhone_13_Pro/Produktfotos_Apple_iPhone_13_Pro_1448.jpg",
      customer: "Ahmad Saheed",
      date: "2 May",
      amount: "300,000",
      method: "Payment on Delivery",
      status: "Pending",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Sadiq Yussuf",
      date: "2 May",
      amount: "220,000",
      method: "Payment Already Made",
      status: "Approved",
    },
    {
      id: 2342353,
      product: "Grand Theft Auto V + Great White Shark Bundle",
      img: "https://www.cjs-cdkeys.com/product_images/img/u/autov__53852.jpg",
      customer: "Tobi Amid",
      date: "2 May",
      amount: "9,000",
      method: "Payment on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Smart Tv",
      img: "https://www.sencor.com/Sencor/media/content/Products/SLE-55US800TCSB-diagonal.jpg",
      customer: "Quayyum Alao",
      date: "2 May",
      amount: "500,000",
      method: "Payment on Delivery",
      status: "Pending",
    },
    {
      id: 2342355,
      product: "Mackbook Laptop",
      img: "data:image/jpeg;base64,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",
      customer: "Qozeem Johnson",
      date: "2 May",
      amount: "480,000",
      method: "Payment Already Made",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell tableCellHeader ">Tracking ID</TableCell>
            <TableCell className="tableCell tableCellHeader ">Product</TableCell>
            <TableCell className="tableCell tableCellHeader ">Customer</TableCell>
            <TableCell className="tableCell tableCellHeader ">Date</TableCell>
            <TableCell className="tableCell tableCellHeader ">Amount</TableCell>
            <TableCell className="tableCell tableCellHeader ">Payment Method</TableCell>
            <TableCell className="tableCell tableCellHeader ">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
