import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread and something else",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false
  },
  {
    name: "Margherita",
    ingredients: "Bread and something else",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false
  },
  {
    name: "Funghi",
    ingredients: "Bread and something else",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false
  },
  {
    name: "Salamino",
    ingredients: "Bread and something else",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false
  },
  {
    name: "Prosciutto",
    ingredients: "Bread and something else",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false
  },
  {
    name: "Spinaci",
    ingredients: "Bread and something else",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true
  },

]

function App() {
  return (
    <ul className="container">
      <Header />
      <Menu />
      <Footer />
    </ul>
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
  const pizzas = pizzaData
  const numPizzas = pizzas.length

  return (
    <main className="menu">
      <h2>Our menu</h2>

      <>
        <p>
          Aunthentic Italian cuisine. 6 creative dishe to choose from. All from our
          stone oven, all organic, all delicious.
        </p>

        {numPizzas > 0 ?
          (<ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
          ) : <p>We're still working on our menu. Please come back later :)</p>}

      </>



      {/* <Pizza
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
      /> */}

    </main>
  )
}

function Pizza({ pizzaObj }) {

  // if (pizzaObj.soldOut) return null

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {
        isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )
      }
    </footer >
  )
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

