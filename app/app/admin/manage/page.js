"use client";
import { useEffect, useState } from "react";

export default function Manage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products").then(res => res.json()).then(setProducts);
  }, []);

  async function del(id) {
    await fetch("/api/products/" + id, { method: "DELETE" });
    setProducts(products.filter(p => p._id !== id));
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Manage Products</h1>
      {products.map(p => (
        <div key={p._id} style={{ marginBottom: 20 }}>
          <b>{p.name}</b><br />
          ₹{p.price}<br />
          <button onClick={() => del(p._id)}>Delete</button>
        </div>
      ))}
    </main>
  );
}