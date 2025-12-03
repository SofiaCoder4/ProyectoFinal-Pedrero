import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="¡Bienvenid@ a nuestra tienda!" />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

