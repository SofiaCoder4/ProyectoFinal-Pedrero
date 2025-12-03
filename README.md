# 🛒 E-commerce React + Vite + Firebase

## 📌 Descripción
Single Page Application de e-commerce desarrollada con **React** y **Vite**, utilizando **Firebase Firestore** como base de datos.  
Permite listar productos, ver detalle, agregar al carrito, y finalizar la compra generando una orden en Firestore.

## 🚀 Tecnologías
- React + Vite
- React Router DOM
- Context API
- Firebase / Firestore
- Bootstrap (para estilos)

## ✨ Funcionalidades
- Listado dinámico de productos desde Firestore
- Filtro por categorías
- Vista en detalle de producto
- Carrito global con Context (agregar, eliminar, vaciar, totales)
- Checkout con registro de orden e ID de confirmación
- Renderizado condicional (loaders, mensajes, sin stock, carrito vacío)

## 📂 Estructura de componentes
- `App.jsx`
- `NavBar` + `CartWidget`
- `ItemListContainer` → `ItemList` → `Item`
- `ItemDetailContainer` → `ItemDetail` → `ItemCount`
- `Cart` → `CartItem`
- `CheckoutForm`

## 🔐 Configuración
1. Clonar el repo y ejecutar:
   ```bash
   npm install
   npm run dev
