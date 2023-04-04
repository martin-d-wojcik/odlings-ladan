import { Fragment } from "react";
import Plant from "./Plant";

export default function PlantList({ plants }) {
  // TODO: add plants to dropdown
  // loop through the plants array and return each plant
  return plants.map((plant) => {
    return <Plant key={plant.key} plant={plant} />;
  });
}
