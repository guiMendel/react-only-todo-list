import React, { useState } from "react";
import "./styles.css";

// icones
import { MdFilterList } from "react-icons/md";
import { HiOutlineFilter } from "react-icons/hi";
import {
  AiOutlineDelete,
  AiOutlineClear,
  AiOutlineCaretDown
} from "react-icons/ai";

export default function ControlMenu(list) {
  const [nextFilter, setNextFilter] = useState("Unmarked");
  const [nextSorting, setNextSorting] = useState("Alphabetic");

  function printItems() {
    console.log(`Lista de itens:`);
    for (const item of list.items) {
      console.log(item);
    }
  }

  const toggleOrder = {
    Creation_Date() {
      console.log("Ordering by Creation Date...");
      printItems();
      list.setItems([...list.items.sort((a, b) => a.id - b.id)]);
      printItems();
      setNextSorting("Alphabetic");
    },
    Alphabetic() {
      console.log("Ordering by Alpahebetic...");
      printItems();
      list.setItems([
        ...list.items.sort((a, b) => a.text.localeCompare(b.text))
      ]);
      printItems();
      setNextSorting("Creation_Date");
    }
  };

  function changeVisibility(item, visibility) {
    item.visible = visibility;
    return item;
  }

  const toggleFilter = {
    Unmarked() {
      console.log("Filtering by Unmarked...");
      list.setItems(
        list.items.map((item) =>
          item.done
            ? changeVisibility(item, false)
            : changeVisibility(item, true)
        )
      );
      list.setCurrentFilter(nextFilter);
      setNextFilter("Marked");
    },
    Marked() {
      console.log("Filtering by Marked...");
      list.setItems(
        list.items.map((item) =>
          !item.done
            ? changeVisibility(item, false)
            : changeVisibility(item, true)
        )
      );
      list.setCurrentFilter(nextFilter);
      setNextFilter("All");
    },
    All() {
      console.log("Filtering by All...");
      list.setItems(list.items.map((item) => changeVisibility(item, true)));
      list.setCurrentFilter(nextFilter);
      setNextFilter("Unmarked");
    }
  };

  function eraseMarked() {
    console.log(
      `Erasing ${list.items.filter((item) => item.done).length} items...`
    );
    list.setItems(list.items.filter((item) => !item.done));
  }

  function eraseAll() {
    console.log(`Erasing ${list.items.length} items...`);
    list.setItems([]);
  }

  return (
    <header>
      <div>
        <MdFilterList size="2rem" onClick={toggleOrder[nextSorting]} />
        <small>
          Order by: <i>Creation Date</i>
        </small>
        <HiOutlineFilter size="2rem" onClick={toggleFilter[nextFilter]} />
        <small>
          Filtering by: <i>{list.currentFilter}</i>
        </small>
        <AiOutlineClear size="2rem" onClick={eraseMarked} />
        <small>Clear marked items</small>
        <AiOutlineDelete size="2rem" onClick={eraseAll} />
        <small>Erase all items</small>
      </div>
      <AiOutlineCaretDown size="1rem" />
    </header>
  );
}
