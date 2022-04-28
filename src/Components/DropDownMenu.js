import React from "react";
import { postArr } from "./PostArr";

function DropDownMenu({ id, name, setState }) {
  const postSelect = (id) => {
    const newArr = postArr.filter((value) => id === value.id);
    if (id) {
      setState(newArr);
    }
  };
  return (
    <>
      <div onClick={() => postSelect(id)}>
        <div className="border text-center py-3">
          <h3>{name}</h3>
        </div>
      </div>
    </>
  );
}

export default DropDownMenu;
