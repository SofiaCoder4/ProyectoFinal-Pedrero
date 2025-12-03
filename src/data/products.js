const products = [
  {
    id: '1',
    title: 'Remera básica',
    price: 2500,
    category: 'ropa',
    img: 'https://images.pexels.com/photos/11671964/pexels-photo-11671964.jpeg'
  },
  {
    id: '2',
    title: 'Zapatillas urbanas',
    price: 8500,
    category: 'calzado',
    img: 'https://media.istockphoto.com/id/497688687/photo/colorful-shoes.jpg?s=612x612&w=is&k=20&c=_5OsuNYcz26s_gpR57czw9PafwxYBZ7eQzA5VmEyH2Q='
  },
  {
    id: '3',
    title: 'Campera deportiva',
    price: 12000,
    category: 'ropa',
    img: 'https://media.istockphoto.com/id/2180377764/vector/hoodie-shirts-template-jacket-design-sportswear-track-front-and-back-view.jpg?s=612x612&w=is&k=20&c=BOEL-Z8LU2gvonhyzJ0aBzuEGwSalI_JUMMVHaanVxU='
  },
  {
    id: '4',
    title: 'Botines de fútbol',
    price: 9500,
    category: 'calzado',
    img: 'https://media.istockphoto.com/id/1175102493/photo/cleats.jpg?s=612x612&w=is&k=20&c=X2PPh4CnpjpElqGyWjt4R2BZ5WQ2kcc-K78XotTCrtw='
  },
  {
    id: '5',
    title: 'Gorra estilo urbano',
    price: 1800,
    category: 'accesorios',
    img: 'https://media.istockphoto.com/id/1551682002/photo/dark-baseball-cap-with-red-visor.jpg?s=1024x1024&w=is&k=20&c=rwJXTnlp6yhlfjFH5j77TEGk4HwGaTp2Bt2OPD4yVTw='
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      resolve(product);
    }, 500);
  });
};
