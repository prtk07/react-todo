import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import "./Task.css";

function Tasks(props) {
  function DeleteItem(e) {
    let ind = e.target.parentNode.id;
    console.log(ind);
    props.removeItem(ind);
  }

  function handleCheckbox(e) {
    console.log(e.target.name);
  }

  return (
    <div>
      {props.list.map((val, index) => {
        return (
          <div className="item-class" key={index} id={index} completed="false">
            <div className="content">
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleCheckbox}
                    color="primary"
                    name={`${index}`}
                  />
                }
                label={val}
              />
            </div>
            <p className="close-button" onClick={DeleteItem}>
              close
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
