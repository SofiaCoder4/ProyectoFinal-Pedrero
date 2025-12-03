import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CategoryListContainer from './components/CategoryListContainer'; // 👈 nuevo import
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
              {/* Home muestra todos los productos */}
              <Route
                path="/"
                element={<ItemListContainer greeting="¡Bienvenid@ a nuestra tienda!" />}
              />

              {/* Categorías muestran filtrados */}
              <Route path="/category/:categoryId" element={<CategoryListContainer />} />

              {/* Detalle de producto */}
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />

              {/* Carrito */}
              <Route path="/cart" element={<Cart />} />

              {/* Checkout */}
              <Route path="/checkout" element={<CheckoutForm />} />

              {/* Página no encontrada */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

