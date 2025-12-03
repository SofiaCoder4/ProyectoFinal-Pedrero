import { Link } from 'react-router-dom';

const Item = ({ id, title, price, img, category }) => {
  // Si no hay imagen, usa un ícono según la categoría
  const getIcon = () => {
    switch (category) {
      case 'ropa':
        return <i className="bi bi-shirt display-1 text-secondary"></i>;
      case 'calzado':
        return <i className="bi bi-bag-check display-1 text-secondary"></i>;
      case 'accesorios':
        return <i className="bi bi-watch display-1 text-secondary"></i>;
      default:
        return <i className="bi bi-box display-1 text-secondary"></i>;
    }
  };

  return (
    <div className="card m-3 shadow-sm" style={{ width: '18rem' }}>
      {img ? (
        <img src={img} className="card-img-top" alt={title} />
      ) : (
        <div className="d-flex justify-content-center align-items-center p-4">
          {getIcon()}
        </div>
      )}
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Precio: ${price}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
