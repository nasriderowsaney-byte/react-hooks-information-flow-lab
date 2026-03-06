import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header onDarkModeClick={() => setDarkMode(!darkMode)} />
      <ShoppingList />
    </div>
  );
}

export default App;