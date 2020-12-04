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
      {[...itemList]
        // Primeiro os items não marcados
        .sort((first) => {
          // O primeiro item vem antes se e somente se ele não estiver pronto
          if (!first.done) return -1;
          return 0;
        })
        .map((item) => {
          return item.visible ? (
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
