function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="display-3 text-danger">404</h1>
      <p className="lead">Ups... la página que buscás no existe.</p>
      <a href="/" className="btn btn-primary mt-3">Volver al inicio</a>
    </div>
  );
}

export default NotFound;
