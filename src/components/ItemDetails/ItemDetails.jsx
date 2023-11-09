import React from 'react'

export default function ItemDetails() {
  return (
    <div className="product-container">
        <img
            className="product-image"
            src="https://img.freepik.com/foto-gratis/par-entrenadores_144627-3800.jpg?w=826&t=st=1699571649~exp=1699572249~hmac=f713a2eeb6f01a213d84184cf1873485603e9fbd1479bdc201f8431ce764ab36"
            alt="Nombre del Producto"
        />
        <div className="product-details">
            <h2 className="product-title">zapatillas genéricas</h2>
            <p><b>SKU:</b> 12HT654P</p>
            <p className="product-price">$99.99</p>
            <p><b>Disponibilidad:</b> 12</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum
            voluptas magnam velit, laborum suscipit ratione optio nobis dolores
            commodi!
            </p>
            <button>Agregar al Carrito</button>
        </div>
    </div>
  )
}
