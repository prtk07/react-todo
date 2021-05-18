import React from "react";
import './Task.css';

function Tasks(props) {
    function DeleteItem(e){
        // e.preventDefault();
        let ind = e.target.parentNode.id;
        console.log(ind);
        props.removeItem(ind);
    }
  return (
    <div>
      {props.list.map((val, index) => {
        return (
            <div className="item-class" key={index} id={index}>
                <p>{val}</p>
                <p className="close-button" onClick={DeleteItem}>close</p>
            </div>
        )
      })}
    </div>
  );
}

export default Tasks;
