import {MdArrowBackIos} from "react-icons/md";
import style from "./AboutPage.module.css";
import propTypes from "prop-types";
import {Button} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutPage({setCurrentPage}) {
    return (
        <div className="fullScreenContainer d-flex flex-column align-items-center justify-content-start">
            <div className="w-100">
                <Button
                    className={"backButton mb-3"}
                    onClick={() => setCurrentPage("WelcomePage")}
                >
                    <MdArrowBackIos/>
                    Voltar
                </Button>
                <h1 className={`${style.title} fs-1`}>Sobre o projeto</h1>
                <h3 className={"fs-3"}>Integrantes</h3>
                <div className={style.divisor}></div>
                <ul>
                    <li>
                        <p>André: RM 554224 - Tela de Busca</p>
                    </li>
                    <li>
                        <p>Alvaro: RM 553751 - Telas de Checkout e Sobre o Projeto</p>
                    </li>
                    <li>
                        <p>Christian: RM 553775 - Tela de Carrinho</p>
                    </li>
                    <li>
                        <p>Filipe: RM 552906 - Tela de Formulário</p>
                    </li>
                    <li>
                        <p>Lucas: RM 552973 - Tela de Início e Tela de Detalhes do Produto</p>
                    </li>
                </ul>
                <div className={style.divisor}></div>
                <h2>Recursos utilizados:</h2>

                <Row>
                    <Col sm={6}>
                        <ul className={style.list}>
                            <li><strong>React Hooks:</strong> useState, useEffect, useContext, useRef, useCallback</li>
                            <li><strong>React Context:</strong> O CartContext é usado em vários componentes para
                                gerenciar o estado do carrinho de compras.
                            </li>
                            <li><strong>Material-UI (MUI) Components:</strong> Vários componentes do MUI são usados,
                                incluindo Table, TableBody, TableCell, TableContainer, TableRow, IconButton, TextField e
                                Autocomplete
                            </li>
                            <li><strong>React-Bootstrap Components:</strong> Componentes como Button, Row, Col e Image
                            </li>
                            <li><strong>React Icons:</strong> Biblioteca de ícones usada em vários arquivos</li>
                        </ul>
                    </Col>
                    <Col sm={6}>
                        <ul className={style.list}>
                            <li><strong>ThemeProvider:</strong> Usado para fornecer um tema para os componentes da
                                aplicação, conforme visto em
                            </li>
                            <li><strong>CSS Modules:</strong> Usado para estilização de componentes</li>
                            <li><strong>CSS Custom Properties (Variáveis CSS):</strong> Usado para definir cores e
                                fontes
                            </li>
                            <li><strong>ESLint:</strong> Configurado no arquivo .eslintrc.cjs para manter a qualidade do
                                código.
                            </li>
                            <li><strong>Vite:</strong> Usado para construir e servir o projeto, conforme configurado no
                                arquivo vite.config.js
                            </li>
                            <li><strong>npm scripts:</strong> Definidos no arquivo package.json para automatizar tarefas
                                como construção e teste do projeto.
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

AboutPage.propTypes = {
    setCurrentPage: propTypes.func.isRequired,
};
