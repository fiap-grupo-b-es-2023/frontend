import {useState} from 'react';
import CartProvider from './contexts/CartContext.jsx';
import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import FormPage from "./pages/FormPage/FormPage.jsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage.jsx";
import {ThemeProvider} from "@mui/material";
import darkTheme from "./theme.js";


function App() {
    const [currentPage, setCurrentPage] = useState('WelcomePage');
    let pageComponent;
    switch (currentPage) {
        case 'WelcomePage':
            pageComponent = <WelcomePage setCurrentPage={setCurrentPage}/>;
            break;
        case 'FormPage':
            pageComponent = <FormPage setCurrentPage={setCurrentPage}/>;
            break;
        case 'CheckoutPage':
            pageComponent = <CheckoutPage/>;
            break;
        case 'SearchPage':
            pageComponent = <SearchPage setCurrentPage={setCurrentPage}/>;
            break;
        case 'CartPage':
            pageComponent = <CartPage  setCurrentPage={setCurrentPage}/>;
            break;
        case 'AboutPage':
            pageComponent = <AboutPage setCurrentPage={setCurrentPage}/>;
            break;
        case 'ProductDetailsPage':
            pageComponent = <ProductDetailsPage/>;
            break;
        default:
            pageComponent = <WelcomePage/>;
    }

    return (
        <CartProvider>
            <ThemeProvider theme={darkTheme}>
                {pageComponent}
            </ThemeProvider>
        </CartProvider>
    )
}

export default App