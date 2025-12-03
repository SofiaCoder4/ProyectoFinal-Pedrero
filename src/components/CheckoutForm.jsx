import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const CheckoutForm = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer: form,
      items: cart,
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date())
    };
    try {
      const ordersRef = collection(db, 'orders');
      const doc = await addDoc(ordersRef, order);
      setOrderId(doc.id);
      clearCart();
    } catch (err) {
      console.error('Error al guardar la orden:', err);
    }
  };

  if (orderId) {
    return (
      <div className="text-center mt-5">
        <h4>¡Gracias por tu compra!</h4>
        <p>Tu código de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h3 className="mb-4">Finalizar compra</h3>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required className="form-control" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="form-control" />
        <input type="tel" name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} required className="form-control" />
        <button type="submit" className="btn btn-success">Confirmar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
