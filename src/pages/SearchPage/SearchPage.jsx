import {useState, useEffect, useCallback, useRef} from "react";
import {FaShoppingCart} from 'react-icons/fa';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import {Autocomplete, TextField} from '@mui/material';

import style from './SearchPage.module.css';
import products from './products.json';

// Função que gera as opções de busca responsivas
function getSearchOptions(searchValue) {
    return [
        {label: `Buscar "${searchValue}" em código`, value: "codigo"},
        {label: `Buscar "${searchValue}" em produto`, value: "nome"},
        {label: `Buscar "${searchValue}" em marca`, value: "marca"},
        {label: `Buscar "${searchValue}" em família`, value: "familia"},
        {label: `Buscar "${searchValue}" em linhas`, value: "linha"},
    ];
}

function matches(searchValue, product, category) {
    if (!category || !searchValue) return false;
    const value = product[category]?.toLowerCase();
    return value?.includes(searchValue.toLowerCase());
}


export default function SearchPage() {
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState(null);
    const [currentProducts, setCurrentProducts] = useState(products);
    const [searchOptions, setSearchOptions] = useState(getSearchOptions(""));
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

    return (
        <Container
            fluid
            className={`fullScreenContainer d-flex flex-column justify-content-center align-items-center`}
        >
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
                    <Col sm={1} className="d-flex justify-content-center align-items-center">
                        <button className={`${style.button} btn `} onClick={startSearch}>
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
                                        <TableCell className={"fs-3 fw-bold text-white"}>Cód.:</TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>Produto</TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>Marca</TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>Família</TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>Linha</TableCell>
                                        <TableCell className={"fs-3 fw-bold text-white"}>Preço unitário</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {currentProducts.map((p) => (
                                        <TableRow key={p.codigo}>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>{p.codigo}</TableCell>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>{p.nome}</TableCell>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>{p.marca}</TableCell>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>{p.familia}</TableCell>
                                            <TableCell sx={{color: "var(--color-light-gray)"}}>{p.linha}</TableCell>
                                            <TableCell sx={{color: "var(--color-light-gray)"}} align={"center"}>
                                                R$ {p.preco.toFixed(2)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}