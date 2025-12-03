const CartItem = ({ item, onRemove }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <img src={item.img} alt={item.title} width="64" height="64" className="rounded" />
        <div>
          <strong>{item.title}</strong>
          <div className="text-muted">Cant: {item.quantity} • Precio: ${item.price}</div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <span className="fw-bold">${item.price * item.quantity}</span>
        <button className="btn btn-sm btn-outline-danger" onClick={() => onRemove(item.id)}>Eliminar</button>
      </div>
    </li>
  );
};

export default CartItem;
