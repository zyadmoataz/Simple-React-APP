import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/////////////////////////////////////////////////////Data.js file insert it here//////////////////////////////////////////////////////////////
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Master</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzaLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaLength > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creatice dishes to choose from. All our
            stone oven, all organinic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're Still Working On Our Menu Please Come Back Later ❤️</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? " sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 1;
  const closedHour = 22;
  const isOpened = hour >= openHour && hour <= closedHour;
  return (
    <footer className="footer">
      {isOpened ? (
        <Order close={closedHour} open={openHour} />
      ) : (
        <p>
          We're Happy To Welcome You Between {openHour}:00 & {closedHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ close, open }) {
  return (
    <div className="order">
      <p>
        We're Currently Open {open}:00 From To {close}:00. Come Vist Us, Or
        Order Online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
