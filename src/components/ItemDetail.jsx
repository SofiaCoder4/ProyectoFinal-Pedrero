import { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, title, price, img, stock }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart({ id, title, price, img }, quantity);
    setAdded(true);
  };

  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">Precio: ${price}</p>
          {!added ? (
            <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
          ) : (
            <div className="d-flex justify-content-center gap-3">
              <Link to="/cart" className="btn btn-success">Ir al carrito</Link>
              <Link to="/" className="btn btn-outline-primary">Seguir comprando</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
