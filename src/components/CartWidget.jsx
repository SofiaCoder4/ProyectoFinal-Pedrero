import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getTotalUnits } = useCart();
  const total = getTotalUnits();

  return (
    <Link to="/cart" className="btn btn-outline-secondary position-relative">
      <i className="bi bi-cart3 fs-5"></i>
      {total > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {total}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
