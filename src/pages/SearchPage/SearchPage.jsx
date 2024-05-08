import {useCallback, useEffect, useRef, useState} from "react";
import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage.jsx";
import {FaShoppingCart} from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import {Autocomplete, TextField} from "@mui/material";

import style from "./SearchPage.module.css";
import products from "./products.json";

// Função que gera as opções de busca responsivas
function getSearchOptions(searchValue) {
    return [
        {label: `Buscar "${searchValue}" em código`, value: "code"},
        {label: `Buscar "${searchValue}" em produto`, value: "name"},
        {label: `Buscar "${searchValue}" em marca`, value: "brand"},
        {label: `Buscar "${searchValue}" em família`, value: "family"},
        {label: `Buscar "${searchValue}" em linhas`, value: "line"},
    ];
}

function matches(searchValue, product, category) {
    if (!category || !searchValue) return false;
    const value = product[category]?.toLowerCase();
    return value?.includes(searchValue.toLowerCase());
}

export default function SearchPage({setCurrentPage}) {
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState(null);
    const [currentProducts, setCurrentProducts] = useState(products);
    const [searchOptions, setSearchOptions] = useState(getSearchOptions(""));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const autocompleteOpen = useRef(false);

    useEffect(() => {
        if (searchValue) {
            setSearchOptions(getSearchOptions(searchValue));
            autocompleteOpen.current = true;
        } else {
            autocompleteOpen.current = false;
        }
    }, [searchValue]);

    useEffect(() => {
        startSearch();
    }, [searchType]);

    const handleOptionSelect = useCallback((event, newValue) => {
        if (newValue) {
            setSearchType(newValue.value);
            autocompleteOpen.current = false;
        } else {
            setSearchType(null);
            setSearchValue("");
        }
    }, []);

    const startSearch = useCallback(() => {
        if (!searchValue) {
            setCurrentProducts(products);
            return;
        }
        const filteredProducts = products.filter((p) =>
            matches(searchValue, p, searchType)
        );
        setCurrentProducts(filteredProducts);
    }, [searchValue, searchType]);

    const handleFocus = () => {
        autocompleteOpen.current = true;
    };

    const handleBlur = () => {
        autocompleteOpen.current = false;
    };

    const handleRowClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div className={"fullScreenContainer"}>
            <Col sm={10}>
                <Row>
                    <Col sm={11}>
                        <Autocomplete
                            open={autocompleteOpen.current}
                            options={searchOptions}
                            forcePopupIcon={false}
                            onChange={handleOptionSelect}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    margin={"none"}
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="Buscar Produto"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            )}
                        />
                    </Col>
                    <Col
                        sm={1}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <button className={`${style.button} btn`} onClick={() => setCurrentPage("CartPage")}>
                            <FaShoppingCart/>
                        </button>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col sm={12}>
                        <TableContainer sx={{maxHeight: "400px", overflow: "auto"}}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={"fs-3 fw-bold text-white"}>
                                            Cód.:
                                        </TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>
                                            Produto
                                        </TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>
                                            Marca
                                        </TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>
                                            Família
                                        </TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>
                                            Linha
                                        </TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>
                                            Preço unitário
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentProducts.map((p) => (
                                        <TableRow key={p.code} onClick={() => handleRowClick(p)}>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>
                                                {p.code}
                                            </TableCell>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>
                                                {p.name}
                                            </TableCell>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>
                                                {p.brand}
                                            </TableCell>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>
                                                {p.family}
                                            </TableCell>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>
                                                {p.line}
                                            </TableCell>
                                            <TableCell
                                                sx={{color: "var(--color-light-gray)"}}
                                                align={"center"}
                                            >
                                                R$ {p.price.toFixed(2)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Col>
                </Row>
            </Col>
            {isModalOpen && (
                <ProductDetailsPage product={selectedProduct} closeModal={() => setIsModalOpen(false)} />
            )}
        </div>
    );
}
