import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">Mi Tienda</Link>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/ropa" className="nav-link">Ropa</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/calzado" className="nav-link">Calzado</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/accesorios" className="nav-link">Accesorios</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
