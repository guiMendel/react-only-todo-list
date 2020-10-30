import React, { useState } from "react";
import "./styles.css";

// icones
import { VscClose } from "react-icons/vsc";

export default function ToDoItem({ text, removeSelf }) {
  const [done, setDone] = useState(false);

  function switchDone() {
    setDone(!done);
  }

  return (
    <div className={done ? "to-do done" : "to-do"} onClick={switchDone}>
      <span>{text}</span>
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
