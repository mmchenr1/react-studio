import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;

});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartContents, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="contents">
        <div className="bakery-menu">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
              <BakeryItem 
                cartTotal={cartTotal} 
                setCartTotal={setCartTotal} 
                setCart={setCart} 
                cartContents={cartContents} 
                item={item} 
                id={index}
                key={index}></BakeryItem>
          ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */}
          <div className="cart-contents">
            {cartContents.map((item, index) => (
              <p key={index}>
                {item.count}x {item.name}
              </p>
            ))}
          </div>

          <p className="cart-total">${cartTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
