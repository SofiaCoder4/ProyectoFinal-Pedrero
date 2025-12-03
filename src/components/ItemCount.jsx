import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3 mt-3">
      <div className="d-flex align-items-center justify-content-center gap-3">
        <button className="btn btn-outline-danger" onClick={handleDecrement} disabled={count === 1}>-</button>
        <span className="fs-4">{count}</span>
        <button className="btn btn-outline-success" onClick={handleIncrement} disabled={count === stock}>+</button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
      {stock === 0 && <small className="text-danger">Producto sin stock</small>}
    </div>
  );
};

export default ItemCount;
