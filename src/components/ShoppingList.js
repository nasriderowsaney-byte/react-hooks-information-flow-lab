import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items = [] }) {
  const [category, setCategory] = useState("All");

  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  return (
    <div>
      <Filter onCategoryChange={setCategory} />

      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;