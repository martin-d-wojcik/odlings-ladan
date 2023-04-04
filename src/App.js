import { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlantList from "./PlantList";
import React, { useState, useRef, useEffect } from "react";
import getRandomInt from "./Utilities";

const LOCAL_STORAGE_KEY = "plantApp.plants";

function App() {
  // called once first time the app loads
  // pass default state. Plants: empty array
  // useState returns an array and destructures the array
  const [plants, setPlant] = useState([]);

  // useRef - reference elements in html
  const plantNameRef = useRef();

  // call useEffect with empty array to call it only once after component load
  useEffect(() => {
    const storedPlants = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedPlants) setPlant(storedPlants);
  }, []);

  // use useEffect to store created plants when refreshing page
  // useEffect takes another function as a parameter
  // call useEffect anytime the plants array changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(plants));
  }, [plants]);

  function handleAddPlant(e) {
    const name = plantNameRef.current.value;
    if (name === "") return;
    setPlant((prevPlants) => {
      return [
        ...prevPlants,
        { id: getRandomInt(10), name: name, grown: false },
      ];
    });
    plantNameRef.current.value = null;
  }

  return (
    <Fragment>
      <div class="bg-dark text-white">
        <div class="text-center pt-3 pb-3">
          <input ref={plantNameRef} type="text" placeholder="Ange ny planta" />
          <br />
          <br />
          <button
            type="button"
            class="btn btn-success"
            onClick={handleAddPlant}
          >
            Lägg till plantan
          </button>
        </div>
      </div>
      <br />
      <br />
      <div class="container rounded bg-warning">
        <div class="text-center pt-3 pb-3">
          <div class="text-center pt-3 pb-3">
            <h4>Odlade</h4>
          </div>
          <PlantList plants={plants} />
          <button type="button" class="btn btn-dark">
            Ta bort plantan
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
