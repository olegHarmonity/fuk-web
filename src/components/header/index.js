import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="logo">fuk</h1>
      <nav className="navigation">
        <li className="navigation-item">Prijavite se</li>
        <li className="navigation-item">Registrujte se</li>
        <li className="navigation-item">Kontaktirajte nas</li>
      </nav>
    </div>
  );
}
