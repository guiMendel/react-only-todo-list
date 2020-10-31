import React, { useEffect } from "react";
import "./styles.css";

// componentes
import ToDoItem from "./to-do-item";

export default function ToDoList({
  itemList,
  setItemList,
  removeItem,
  currentFilter
}) {
  // // Garante que os itens completos estejam sempre embaixo na lista
  // // Não funciona ainda
  // useEffect(() => {
  //   const marked_items = itemList.filter((item) => item.done);
  //   const unmarked_items = itemList.filter((item) => !item.done);
  //   setItemList([...unmarked_items, ...marked_items]);
  // }, [itemList, setItemList]);

  return (
    <main>
      {itemList.map((item) => {
        return (
          <ToDoItem
            item={item}
            key={item.id}
            removeSelf={() => removeItem(item.id)}
            currentFilter={currentFilter}
          />
        );
      })}
    </main>
  );
}
