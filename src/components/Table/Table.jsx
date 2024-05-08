import {useContext} from "react";
import {CartContext} from "../../CartContext.jsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import {FaPlus, FaMinus} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {Image} from 'react-bootstrap';






export default function CustomizedTables() {
    const {cart, removeFromCart, updateQuantity} = useContext(CartContext);

    const handleIncrement = (product) => {
        updateQuantity(product.code, product.quantity + 1);
    };

    const handleDecrement = (product) => {
        if (product.quantity > 1) {
            updateQuantity(product.code, product.quantity - 1);
        }
    };

    const handleDelete = (product) => {
        removeFromCart(product.code);
    };

    return (
        <TableContainer sx={{maxHeight: '400px', overflow: "auto"}}>
            <Table sx={{minWidth: 700, backgroundColor: "#212121"}}>
                <TableBody>
                    {cart.map((product) => (
                        <TableRow
                            key={product.code}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row" sx={{paddingLeft: '0'}}>
                                <div className="d-flex align-items-center">
                                    <Image
                                        src="https://via.placeholder.com/60"
                                        alt="Imagem do produto"
                                        rounded
                                    />
                                    <div className="d-flex flex-column ms-3" style={{color: "#fff"}}>
                                        <span>{product.name}</span>
                                        <span>R$ {(product.totalPrice).toFixed(2)}</span>
                                    </div>
                                </div>
                            </TableCell>

                            <TableCell sx={{color: "#fff"}} align="right" sx={{paddingRight: '0'}}>
                                <IconButton onClick={() => handleDecrement(product)} sx={{color: "#fff"}}>
                                    <FaMinus style={{fontSize: '1em'}}/>
                                </IconButton>
                                <span style={{margin: '0 10px', fontSize: '1em'}}>{product.quantity}</span>
                                <IconButton onClick={() => handleIncrement(product)} sx={{color: "#fff"}}>
                                    <FaPlus style={{fontSize: '1em'}}/>
                                </IconButton>
                                <IconButton onClick={() => handleDelete(product)} sx={{color: "red"}}>
                                    <MdDelete fontSize="1em"/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}