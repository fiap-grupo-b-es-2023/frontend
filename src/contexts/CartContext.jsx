import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({
    cart: [],
    totalPrice: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
});

export default function CartProvider({children})  {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product, quantity) => {
        const existingProductIndex = cart.findIndex(item => item.code === product.code);

        if (existingProductIndex >= 0) {
            // O produto já está no carrinho, então atualizamos a quantidade e o preço total
            const newCart = [...cart];
            newCart[existingProductIndex].quantity += quantity;
            newCart[existingProductIndex].totalPrice = newCart[existingProductIndex].quantity * product.price;
            setCart(newCart);
        } else {
            // O produto não está no carrinho, então adicionamos um novo item
            const totalPrice = product.price * quantity;
            setCart(prevCart => [...prevCart, { code: product.code, name: product.name, quantity, price: product.price, totalPrice }]);        }
    };

    const removeFromCart = (productCode) => {
        const newCart = cart.filter(item => item.code !== productCode);
        setCart(newCart);
    };

    const updateQuantity = (productCode, quantity) => {
        const existingProductIndex = cart.findIndex(item => item.code === productCode);

        if (existingProductIndex >= 0) {
            const newCart = [...cart];
            newCart[existingProductIndex].quantity = quantity;
            newCart[existingProductIndex].totalPrice = quantity * newCart[existingProductIndex].price;
            setCart(newCart);
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.totalPrice, 0);
    };
    // sempre que o carrinho for atualizado, atualizamos o preço total
    useEffect(() => {
        setTotalPrice(getTotalPrice());
    }, [cart]);
    const ctxValue = { cart, totalPrice,addToCart, removeFromCart, updateQuantity };

    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    );
}