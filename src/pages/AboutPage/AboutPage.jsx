import { MdArrowBackIos } from "react-icons/md";
import style from "./AboutPage.module.css";
import propTypes from "prop-types";

export default function AboutPage({ setCurrentPage }) {
  return (
    <main className={style.main}>
      <button
        className={style.header}
        onClick={() => setCurrentPage("WelcomePage")}
      >
        <MdArrowBackIos />
        Voltar
      </button>
      <h1 className={style.title}>Sobre o projeto</h1>
      <h2 className={style.subtitle}>Integrantes</h2>
      <div className={style.divisor}></div>
      <ul className={style.list}>
        <li>
          <h2>André: RM 554224</h2>
        </li>
        <li>
          <h2>Alvaro: RM 553751</h2>
        </li>
        <li>
          <h2>Christian: RM 553775</h2>
        </li>
        <li>
          <h2>Filipe: RM 552906 </h2>
        </li>
        <li>
          <h2>Lucas: RM 552973 </h2>
        </li>
      </ul>
      <div className={style.divisor}></div>
      <h2 className={style.subtitle}>Recursos utilizados:</h2>
      <ul className={style.list}>
        <li>
          React Hooks: useState, useEffect, useContext, useRef, useCallback
        </li>
        <li>
          React Context: O CartContext é usado em vários componentes para
          gerenciar o estado do carrinho de compras.
        </li>
        <li>
          Material-UI (MUI) Components: Vários componentes do MUI são usados,
          incluindo Table, TableBody, TableCell, TableContainer, TableRow,
          IconButton, TextField e Autocomplete
        </li>
        <li>
          React-Bootstrap Components: Componentes como Button, Row, Col e Image
        </li>
        <li>React Icons: Biblioteca de ícones usada em vários arquivos</li>
        <li>
          ThemeProvider: Usado para fornecer um tema para os componentes da
          aplicação, conforme visto em
        </li>
        <li>CSS Modules: Usado para estilização de componentes</li>
        <li>
          CSS Custom Properties (Variáveis CSS): Usado para definir cores e
          fontes
        </li>
        <li>
          ESLint: Configurado no arquivo .eslintrc.cjs para manter a qualidade
          do código.
        </li>
        <li>
          Vite: Usado para construir e servir o projeto, conforme configurado no
          arquivo vite.config.js
        </li>
        <li>
          npm scripts: Definidos no arquivo package.json para automatizar
          tarefas como construção e teste do projeto.
        </li>
      </ul>
    </main>
  );
}

AboutPage.propTypes = {
  setCurrentPage: propTypes.func.isRequired,
};
