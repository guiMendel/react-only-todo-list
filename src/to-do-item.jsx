import React, { useState } from "react";
import "./styles.css";

// icones
import { VscClose } from "react-icons/vsc";

export default function ToDoItem({ item, removeSelf, currentFilter }) {
  const [done, setDone] = useState(item.done);

  function switchDone() {
    item.done = !item.done;
    // Verifica a filtragem e esconde o item se necessário
    if (
      (item.done && currentFilter === "Unmarked") ||
      (!item.done && currentFilter === "Marked")
    ) {
      item.visible = false;
    }
    setDone(item.done);
  }

  return item.visible ? (
    <div className={done ? "to-do done" : "to-do"} onClick={switchDone}>
      <span>{item.text}</span>
      <VscClose
        size="2rem"
        onClick={(event) => {
          event.stopPropagation();
          removeSelf();
        }}
      />
    </div>
  ) : null;
}
