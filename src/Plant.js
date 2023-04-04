import React, { button } from "react";

export default function Plant({ plant }) {
  return (
    <div>
      <input type="checkbox" checked={plant.grown} />
      <label>{plant.name}</label>
    </div>
  );
}
