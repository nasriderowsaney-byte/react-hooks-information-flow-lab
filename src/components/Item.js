import React, { useState } from "react";

function Item({ name }) {
  const [inCart, setInCart] = useState(false);

  return (
    <li className={inCart ? "in-cart" : ""}>
      {name}

      <button onClick={() => setInCart(!inCart)}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;