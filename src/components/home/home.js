import React from "react";
import Header from "./header";
import "../styles/home.css";
import Recent from "./recent";
import AllProducts from "./allProducts";
export default function Home() {
  return (
    <div className="home">
      <Header />
      <h2 style={{ color: "white", margin: "2px" }}>Recently Accessed</h2>
      <Recent />
      <h2 style={{ color: "white", margin: "2px" }}>All Products</h2>

      <AllProducts />
    </div>
  );
}
