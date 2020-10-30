import React from "react";
import "./styles.css";

// icones
import { MdFilterList } from "react-icons/md";
import { HiOutlineFilter } from "react-icons/hi";
import { AiOutlineDelete, AiOutlineCaretDown } from "react-icons/ai";

export default function controlMenu(list) {
  return (
    <header>
      <div>
        <MdFilterList size="2rem" />
        <small>Ordenar: Data de Criação</small>
        <HiOutlineFilter size="2rem" />
        <small>Filtrar: Todos</small>
        <AiOutlineDelete size="2rem" />
        <small>Apagar todos os itens</small>
      </div>
      <AiOutlineCaretDown size="1rem" />
    </header>
  );
}
