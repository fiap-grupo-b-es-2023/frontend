import propTypes from "prop-types";
import { PiSealCheckFill } from "react-icons/pi";
import style from "./CompletedPage.module.css";

export default function CompletedPage(props) {
    // adicionar redirecionamento para a página inicial

  return (
    <main className={style.main}>
      <PiSealCheckFill size={300} />
      <h1 className={style.title}>Pedido realizado</h1>
      {props.selectedMethod === "Dinheiro" ? (
        <h2>Pague e retire seu pedido no caixa com o cupom impresso</h2>
      ) : (
        <h2>Retirar no caixa com o cupom impresso </h2>
      )}
    </main>
  );
}

CompletedPage.propTypes = {
  selectedMethod: propTypes.string.isRequired,
};
