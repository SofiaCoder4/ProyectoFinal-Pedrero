import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        const snapshot = await getDocs(productsRef);
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(list);
      } catch (err) {
        console.error('Error cargando productos:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-4">Cargando productos...</p>;
  if (!items.length) return <p className="text-center mt-4">No hay productos disponibles.</p>;

  return (
    <div>
      {greeting && <h2 className="text-center mb-4">{greeting}</h2>}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
