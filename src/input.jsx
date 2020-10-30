import React, { useState } from "react";
import "./styles.css";

// icones
import { VscAdd } from "react-icons/vsc";

export default function Input({ appendItem: newItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    setInputValue("");
    newItem({ text: inputValue });
  }
  // Pega quando o usuário dá enter no input
  function detectEnter(event) {
    if (event.key === "Enter" || event.key === 13) {
      handleSubmit(event);
    }
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={detectEnter}
        placeholder="Adicione um item aqui"
      />
      <VscAdd size="2rem" onClick={handleSubmit} />
    </div>
  );
}
