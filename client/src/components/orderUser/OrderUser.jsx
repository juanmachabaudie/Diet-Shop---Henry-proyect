import React, { useContext } from 'react';
import UseStyles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TablePagination from '@material-ui/core/TablePagination';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ProductsContext from "../../context/Products/ProductsContext";
import PopUpsContext from "../../context/PopUps/PopUpsContext";


export default function OrderUser({ name, arr }) {
    const classes = UseStyles();
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { setProduct } = useContext(ProductsContext);
    const { setDetails } = useContext(PopUpsContext);
    const [page, setPage] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [select, setSelect] = React.useState({
        id: 0,
        products: [],
        total: 0,
    })

    const handleClickOpen = (e) => {
        setOpen(true);
        let selec = arr.filter(x => x.id === parseInt(e.target.value));
        setSelect(selec[0]);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    function stableSort(array) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        return stabilizedThis.map((el) => el[0]);
    }

    const handleCancel = (e) => {
        alert("Orden cancelada")
    }

    // const arr = [{
    //     id: 1,
    //     total: 5800,
    //     products: [{
    //         id: 1,
    //         name: "producto 3",
    //         price: 300,
    //         description: "descripcion del producto 3",
    //         image: "https://i.pinimg.com/564x/83/40/7b/83407bedc16706032e02f1f7f1c02695.jpg",
    //         stock: 297,
    //         orderLine: {
    //             quantity: "1",
    //             subTotal: "300",
    //             productId: 4,
    //             cartId: 1
    //         }
    //     }, {
    //         id: 3,
    //         name: "producto 2",
    //         price: 200,
    //         description: "descripcion del producto 2",
    //         image: "https://i.pinimg.com/originals/7f/ab/3a/7fab3a9c485ad806e2f50122676435e6.jpg",
    //         orderLine: {
    //             quantity: "1",
    //             subTotal: "200",
    //             createdAt: "2021-04-26T18:30:45.204Z",
    //             updatedAt: "2021-04-26T18:30:45.204Z",
    //             productId: 3,
    //             cartId: 1
    //         }
    //     }, {
    //         id: 8,
    //         name: "producto 2",
    //         price: 200,
    //         description: "descripcion del producto 2",
    //         image: "https://i.pinimg.com/originals/7f/ab/3a/7fab3a9c485ad806e2f50122676435e6.jpg",
    //         stock: 198,
    //         createdAt: "2021-04-26T14:16:23.061Z",
    //         updatedAt: "2021-04-26T14:16:23.061Z",
    //         orderLine: {
    //             quantity: "1",
    //             subTotal: "200",
    //             createdAt: "2021-04-26T18:30:57.375Z",
    //             updatedAt: "2021-04-26T18:30:57.375Z",
    //             productId: 7,
    //             cartId: 1
    //         }
    //     }, {
    //         id: 7,
    //         name: "producto 2",
    //         price: 200,
    //         description: "descripcion del producto 2",
    //         image: "https://i.pinimg.com/originals/7f/ab/3a/7fab3a9c485ad806e2f50122676435e6.jpg",
    //         stock: 198,
    //         createdAt: "2021-04-26T14:16:23.061Z",
    //         updatedAt: "2021-04-26T14:16:23.061Z",
    //         orderLine: {
    //             quantity: "10",
    //             subTotal: "500",
    //             createdAt: "2021-04-26T18:30:57.375Z",
    //             updatedAt: "2021-04-26T18:30:57.375Z",
    //             productId: 8,
    //             cartId: 1
    //         }
    //     },
    //     ]
    // }, {
    //     id: 2,
    //     total: 5800,
    //     products: [{
    //         id: 1,
    //         name: "producto 3",
    //         price: 300,
    //         description: "descripcion del producto 3",
    //         image: "https://i.pinimg.com/564x/83/40/7b/83407bedc16706032e02f1f7f1c02695.jpg",
    //         stock: 297,
    //         orderLine: {
    //             quantity: "1",
    //             subTotal: "300",
    //             productId: 4,
    //             cartId: 1
    //         }
    //     }, {
    //         id: 3,
    //         name: "producto 2",
    //         price: 200,
    //         description: "descripcion del producto 2",
    //         image: "https://i.pinimg.com/originals/7f/ab/3a/7fab3a9c485ad806e2f50122676435e6.jpg",
    //         orderLine: {
    //             quantity: "1",
    //             subTotal: "200",
    //             createdAt: "2021-04-26T18:30:45.204Z",
    //             updatedAt: "2021-04-26T18:30:45.204Z",
    //             productId: 3,
    //             cartId: 1
    //         }
    //     }, {
    //         id: 8,
    //         name: "producto 2",
    //         price: 200,
    //         description: "descripcion del producto 2",
    //         image: "https://i.pinimg.com/originals/7f/ab/3a/7fab3a9c485ad806e2f50122676435e6.jpg",
    //         stock: 198,
    //         createdAt: "2021-04-26T14:16:23.061Z",
    //         updatedAt: "2021-04-26T14:16:23.061Z",
    //         orderLine: {
    //             quantity: "1",
    //             subTotal: "200",
    //             createdAt: "2021-04-26T18:30:57.375Z",
    //             updatedAt: "2021-04-26T18:30:57.375Z",
    //             productId: 7,
    //             cartId: 1
    //         }
    //     }, {
    //         id: 7,
    //         name: "producto 2",
    //         price: 200,
    //         description: "descripcion del producto 2",
    //         image: "https://i.pinimg.com/originals/7f/ab/3a/7fab3a9c485ad806e2f50122676435e6.jpg",
    //         stock: 198,
    //         createdAt: "2021-04-26T14:16:23.061Z",
    //         updatedAt: "2021-04-26T14:16:23.061Z",
    //         orderLine: {
    //             quantity: "10",
    //             subTotal: "500",
    //             createdAt: "2021-04-26T18:30:57.375Z",
    //             updatedAt: "2021-04-26T18:30:57.375Z",
    //             productId: 8,
    //             cartId: 1
    //         }
    //     },
    //     ]
    // }];

    return (
        <Container>
            <div>
                <h2>{name.toUpperCase()}</h2>
            </div>
            {arr.length === 0 ? <h5>No tiene ninguna orden</h5> :
                <>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Cantidad de productos</TableCell>
                                    <TableCell align="center">Total</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {stableSort(arr)
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {

                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.id}
                                            >
                                                <TableCell align="center" component="th" scope="row">
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="center">{row.products.reduce((acc, el) => acc + parseInt(el.orderLine.quantity), 0)}</TableCell>
                                                <TableCell align="center">{row.total}</TableCell>
                                                <TableCell align="center">
                                                    <button className={classes.btn} value={row.id} onClick={e => handleClickOpen(e)} variant="contained">Ver mas detalles</button>
                                                    {
                                                        name === "pendientes" ?
                                                            <button value={row.id} onClick={e => handleCancel(e)} variant="contained">Cancelar orden</button>
                                                            :
                                                            null
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10]}
                        component="div"
                        count={arr.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <div className={classes.container}>
                            <DialogTitle className={classes.titles} id="alert-dialog-title">Orden {select.id}</DialogTitle>
                            <Button onClick={handleClose}>x</Button>
                        </div>
                        <DialogContent className={classes.modal}>
                            {
                                select.products.length === 0
                                    ?
                                    <h2>No hay productos</h2>
                                    : (
                                        <>
                                            <Table size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center">Nombre</TableCell>
                                                        <TableCell align="center">Imagen</TableCell>
                                                        <TableCell align="center">Cantidad</TableCell>
                                                        <TableCell align="center">Subtotal</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {select.products.map(el => {
                                                        return (
                                                            <TableRow
                                                                hover
                                                                role="checkbox"
                                                                tabIndex={-1}
                                                                key={el.id}
                                                            >
                                                                <TableCell align="center" onClick={() => {
                                                                    setProduct(el);
                                                                    setDetails(true);
                                                                }}>{el.name}</TableCell>
                                                                <TableCell align="center">
                                                                    <img className={classes.img} alt={el.name} src={el.image} />
                                                                </TableCell>
                                                                <TableCell align="center">{el.orderLine.quantity}</TableCell>
                                                                <TableCell align="center">$ {el.orderLine.subTotal}</TableCell>
                                                            </TableRow>
                                                        )
                                                    })}
                                                </TableBody>
                                            </Table>
                                            <div className={classes.total}>
                                                <p>Total</p>
                                                <p v>$ {select.total}</p>
                                            </div>
                                        </>
                                    )
                            }
                        </DialogContent>
                    </Dialog>
                </>
            }
        </Container>
    )
}