import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

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
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <img src={p.img} alt={p.title} width="64" height="64" className="rounded" />
              <div>
                <strong>{p.title}</strong>
                <div className="text-muted">Cant: {p.quantity} • Precio: ${p.price}</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="fw-bold">${p.price * p.quantity}</span>
              <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(p.id)}>Eliminar</button>
            </div>
          </li>
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
