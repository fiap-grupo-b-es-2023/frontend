import { useCallback, useState } from "react"
import {FaShoppingCart} from 'react-icons/fa';
import style from './SearchPage.module.css';
import products from './products.json';

function matches(searchValue, product) {
    const { nome, marca, linha, familia, codigo } = product;
    const targets = [ nome.toLowerCase(), marca.toLowerCase(), linha.toLowerCase(), familia.toLowerCase(), codigo.toLowerCase() ];

    return targets.includes(searchValue.toLowerCase());
}

export default function SearchPage() {

    const [searchValue, setSearchValue] = useState("");
    const [currentProducts, setCurrentProducts] = useState(products);

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            startSearch(searchValue);
        }
    }

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    const startSearch = (searchValue) => {
        console.log(`Searching for: "${searchValue}"`);

        if(!searchValue) {
            console.log("resetting...");
            setCurrentProducts(products);
            return;
        }

        setCurrentProducts(
            products.filter(p => matches(searchValue, p))
        );

        console.log(currentProducts);
    }

    return (
        <div className={style.main}>
            <div className={style.appCenter}>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-10 d-flex">
                            <input 
                                className={style.searchInput}
                                type="text" 
                                id="main_search" 
                                onChange={handleSearchChange}
                                onKeyDown={handleKeyDown}
                                value={searchValue}
                                placeholder="Buscar Produto"
                            />
                        </div>
                        <div className="col d-flex">
                            <button className={`${style.button} btn btn-link m-3`} onClick={() => startSearch(searchValue)}>
                                <FaShoppingCart className="me-2"/>
                            </button>

                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-12">
                            <p>Não achou o que procurava? <a href="#">Informe a placa do veículo</a> para itens compatíveis</p>
                        </div>
                        <div className="col d-flex">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Cód.:</th>
                                        <th>Produto</th>
                                        <th>Marca</th>
                                        <th>Linha</th>
                                        <th>Preço unitário</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentProducts.map(p => {
                                            return <tr key={p.codigo}>
                                                <td>{ p.codigo }</td>
                                                <td>{ p.nome }</td>
                                                <td>{ p.marca }</td>
                                                <td>{ p.linha }</td>
                                                <td>R$ { p.preco.toFixed(2) }</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}