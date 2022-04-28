import React, { useState } from "react";
import { dropDownArr } from "./DropDownArr";
import DropDownMenu from "./DropDownMenu";

function Container() {
  const [state, setState] = useState([]);
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <h1 className="my-4">Your Menu</h1>
          {dropDownArr.map((value) => (
            <div>
              <div>
                <DropDownMenu
                  id={value.id}
                  setState={setState}
                  name={value.post}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-8 border">
          <h1 className="my-4">Content : </h1>
          {dropDownArr.map((value) => (
            <div>
              {state.map((stateValue) =>
                stateValue.id === value.id ? (
                  <h5 className="pt-3 ps-3">{stateValue.post}</h5>
                ) : (
                  ""
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Container;
