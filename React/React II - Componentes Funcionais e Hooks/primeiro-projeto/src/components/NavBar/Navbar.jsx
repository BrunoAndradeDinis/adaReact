import React from "react";
import "./styles.css";

export function Navbar() {

  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <img src="https://images.vexels.com/media/users/3/300375/isolated/preview/09a178348795ed3f76b1a63782ad2de4-desenho-animado-roxo-de-saturno.png?width=320" alt="" />
          <h1>
            Space Flight News </h1>
        </div>

        <ul className="nav-list">
          <li><a href="/">Home </a></li>
          <li><a href="/">Trending </a></li>
          <li><a href="/">Categories </a></li>
          <li><a href="/">About us</a></li>
        </ul>
      </nav>
    </header>
  )
}