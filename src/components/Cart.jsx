import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();
  const total = getTotalPrice();

  if (!cart.length) {
    return (
      <div className="text-center mt-5">
        <h4>Tu carrito está vacío</h4>
        <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h3 className="mb-4">Tu carrito</h3>
      <ul className="list-group mb-3">
        {cart.map((p) => (
          <CartItem key={p.id} item={p} onRemove={removeItem} />
        ))}
      </ul>
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ${total}</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary" onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

