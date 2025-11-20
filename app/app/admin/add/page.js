"use client";
import { useState } from "react";

export default function AddProduct() {
  const [msg, setMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      stock: e.target.stock.value,
      offer: e.target.offer.value,
    };

    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) setMsg("Product Added!");
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Add Product</h1>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" /><br />
        <input name="price" placeholder="Price" /><br />
        <input name="stock" placeholder="Stock" /><br />
        <input name="offer" placeholder="Offer" /><br />
        <textarea name="description" placeholder="Description"></textarea><br />
        <button>Add</button>
      </form>
      <p>{msg}</p>
    </main>
  );
}