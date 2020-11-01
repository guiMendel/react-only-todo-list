import React from "react";
import "./styles.css";

// componentes
import ToDoItem from "./to-do-item";

export default function ToDoList({
  itemList,
  setItemList,
  removeItem,
  currentFilter
}) {
  // Altera um item e atualiza a lista, assim o react sabe que a lista mudou quando apenas um item mudar
  function alterItem(newItem, id) {
    // altera a lsita
    setItemList(itemList.map((item) => (item.id === id ? newItem : item)));
  }

  return (
    <main>
      {/* Primeiro os itens não marcados */}
      {itemList.map((item) => {
        return !item.done && item.visible ? (
          <ToDoItem
            item={item}
            key={item.id}
            alterSelf={(newSelf) => alterItem(newSelf, item.id)}
            removeSelf={() => removeItem(item.id)}
            currentFilter={currentFilter}
          />
        ) : null;
      })}
      {/* Depois os itens marcados */}
      {itemList.map((item) => {
        return item.done && item.visible ? (
          <ToDoItem
            item={item}
            key={item.id}
            alterSelf={(newSelf) => alterItem(newSelf, item.id)}
            removeSelf={() => removeItem(item.id)}
            currentFilter={currentFilter}
          />
        ) : null;
      })}
    </main>
  );
}
