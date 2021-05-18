import React, { useState } from "react";
import "./MainTodo.css";
import Tasks from "./Tasks.js";

function MainTodo() {
  function textChange(e) {
    setItem(e.target.value);
  }

  function itemAdd() {
    if (item === "") {
      alert("No Input");
      return;
    }
    setList([item, ...list]);
    setItem("");
    document.getElementsByClassName("textBox")[0].value = "";
    console.log("item Added");
  }

  function itemRemove(index) {
    let tempList = list;
    tempList.splice(index, 1);
    setList([...tempList]);
    console.log("item Removed");
  }

  let [list, setList] = useState([]);
  let [item, setItem] = useState("");
  return (
    <div className="TodoComponent">
      <div className="input">
        <input
          className="textBox"
          onChange={textChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") itemAdd();
          }}
        />
        <button className="AddButton" onClick={itemAdd}>
          Add
        </button>
      </div>
      <div className="task-container">
        <Tasks list={list} removeItem={itemRemove} />
      </div>
    </div>
  );
}

export default MainTodo;
