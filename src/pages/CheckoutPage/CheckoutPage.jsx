import { MdArrowBackIos, MdKeyboardArrowDown } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import style from "./CheckoutPage.module.css";
import { useState } from "react";
import CompletedPage from "./CompletedPage/CompletedPage";

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  function handleClick(e) {
    e.preventDefault();
    setSelectedMethod(e.target.value);
    if(e.target.value === "Dinheiro") {
      return setPaymentCompleted(true);
    }
    const id = setTimeout(() => setPaymentCompleted(true), 5000);
    setTimeoutId(id);
  }
  return paymentCompleted ? (
    <CompletedPage selectedMethod={selectedMethod}/>
  ) : (
    <main className={style.main}>
      <header className={style.header} onClick={() =>  {
        clearTimeout(timeoutId);
        setSelectedMethod("");
        setPaymentCompleted(false);
      }}>
        <MdArrowBackIos />
        Voltar
      </header>
      <h1 className={style.title}>Pagamento</h1>
      {selectedMethod.length === 0 ? (
        <div className={style.buttons}>
          <button
            className={`${style.button}`}
            onClick={handleClick}
            value={"Dinheiro"}
          >
            <FaMoneyBills size={75} />
            Dinheiro
          </button>
          <button
            className={`${style.button}`}
            onClick={handleClick}
            value={"Cartão"}
          >
            <FaCreditCard size={75} />
            Cartão
          </button>
        </div>
      ) : (
        <div className={style.instructions}>
          <h1 className={style.title}>Siga as instruções na maquininha</h1>
          <MdKeyboardArrowDown size={150} className={style.icon} />
        </div>
      )}
    </main>
  );
}
