import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function App() {
  return (
    <div className="container">
      <Header />
      <h1>Hello React</h1>
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {}

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co</h1>
    </header>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h3>Our menu</h3>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        photoName="pizzas/funghi.jpg"
        price={12}
        ingredients="Tomato, something, spinach, and ricotta cheese"
      />

    </main>
  )
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

