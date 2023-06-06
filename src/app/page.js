'use client'

import { useState } from "react";
import CartComponent from "./components/CardComponent";

export default function Home() {
  const [product, setProduct] = useState({
    id: 1,
    product: "Product1",
    price: 100,
    quantity: 1,
    image: "https://i.pinimg.com/564x/ac/24/c0/ac24c023415f3adbddce6ae6c2a68bd4.jpg",
    description: "Product Description"
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <CartComponent key={product.id } title={product.product} image={product.image} price={product.price} description={product.description}>

      </CartComponent>
    </main>
  )
}
