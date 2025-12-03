import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const ref = doc(db, 'products', itemId);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setItem({ id: snap.id, ...snap.data() });
        } else {
          setItem(null);
        }
      } catch (err) {
        console.error('Error cargando producto:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [itemId]);

  if (loading) return <p className="text-center mt-4">Cargando detalle...</p>;
  if (!item) return <p className="text-center mt-4">Producto no encontrado.</p>;

  return <ItemDetail {...item} />;
};

export default ItemDetailContainer;
