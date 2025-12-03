import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        const q = categoryId
          ? query(productsRef, where('category', '==', categoryId))
          : productsRef;

        const snapshot = await getDocs(q);
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(list);
      } catch (err) {
        console.error('Error cargando productos:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  if (loading) return <p className="text-center mt-4">Cargando productos...</p>;
  if (!items.length) return <p className="text-center mt-4">No hay productos en esta categoría.</p>;

  return (
    <div>
      {greeting && <h2 className="text-center mb-4">{greeting}</h2>}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
