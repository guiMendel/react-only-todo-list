import React from "react";
import "./styles.css";

// componentes
import ToDoItem from "./to-do-item";

export default function ToDoList({ itemList, removeItem }) {
  return (
    <main>
      {itemList.map((item) => {
        return (
          <ToDoItem
            text={item.text}
            key={item.id}
            removeSelf={() => removeItem(item.id)}
          />
        );
      })}
    </main>
  );
}
