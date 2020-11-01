import React from "react";
import "./styles.css";

// icones
import { VscClose } from "react-icons/vsc";

export default function ToDoItem({
  item,
  alterSelf,
  removeSelf,
  currentFilter
}) {
  function switchDone() {
    item.done = !item.done;
    // Verifica a filtragem e esconde o item se necessário
    if (
      (item.done && currentFilter === "Unmarked") ||
      (!item.done && currentFilter === "Marked")
    ) {
      item.visible = false;
    }
    alterSelf(item);
  }

  return (
    <div className={item.done ? "to-do done" : "to-do"} onClick={switchDone}>
      <span>{item.text}</span>
      <VscClose
        size="2rem"
        onClick={(event) => {
          event.stopPropagation();
          removeSelf();
        }}
      />
    </div>
  );
}
