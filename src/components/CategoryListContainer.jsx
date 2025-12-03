import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import ItemList from './ItemList';

const CategoryListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        const snapshot = await getDocs(productsRef);
        const allItems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        //  Log extra para ver las categorías reales
        console.log("Todas las categorías en Firestore:", allItems.map(i => `"${i.category}"`));

        //  Filtro seguro por categoría
        const filtered = allItems.filter((item) => {
          const itemCategory = item.category?.toLowerCase().trim();
          const routeCategory = categoryId?.toLowerCase().trim();
          return itemCategory === routeCategory;
        });

        console.log("Categoría actual:", categoryId);
        console.log("Productos encontrados:", filtered);

        setItems(filtered);
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
      <h2 className="text-center mt-4">Productos de: {categoryId}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default CategoryListContainer;
