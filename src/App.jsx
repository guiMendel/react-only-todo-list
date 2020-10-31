import React, { useState } from "react";
import "./styles.css";

// componentes
import ToDoList from "./to-do-list";
import ControlMenu from "./to-do-list-controller";
import Input from "./input";

export default function App() {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [idCounter, setIdCounter] = useState(3);
  const [items, setItems] = useState([
    {
      text: "Lorem Item",
      id: 1,
      visible: true,
      done: false
    },
    {
      text: "Lorem Biden",
      id: 2,
      visible: true,
      done: false
    }
  ]);

  function appendItem(item) {
    if (!item.text) return;
    item.done = false;
    item.visible = true;
    item.id = idCounter;
    setIdCounter(idCounter + 1);
    setItems([item, ...items]);
  }

  function removeItem(id) {
    console.log(`Removing item with id ${id}`);
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  }

  return (
    <div id="container">
      {/* campo para adicionar um novo item */}
      <Input appendItem={appendItem} />
      {/* opções de lista */}
      <ControlMenu
        items={items}
        setItems={setItems}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      {/* lista de itens */}
      <ToDoList
        itemList={items}
        setItemList={setItems}
        removeItem={removeItem}
        currentFilter={currentFilter}
      />
    </div>
  );
}
