"use client";
import { useState } from "react";

export default function Admin() {
  const [logged, setLogged] = useState(false);
  const [msg, setMsg] = useState("");

  async function login(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.success) setLogged(true);
    else setMsg("Wrong username or password!");
  }

  if (!logged)
    return (
      <main style={{ padding: 20 }}>
        <h1>Admin Login</h1>
        <form onSubmit={login}>
          <input name="username" placeholder="Username" /><br />
          <input name="password" placeholder="Password" type="password" /><br />
          <button>Login</button>
        </form>
        <p>{msg}</p>
      </main>
    );

  return (
    <main style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <a href="/admin/add">Add Product</a><br />
      <a href="/admin/manage">Manage Products</a>
    </main>
  );
}