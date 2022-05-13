import { Link } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import { feedAlertIntervalHigh } from "./feedAlertIntervals";

//Checks when page is loaded or refreshed whether an animal has gone 4 hours or more without food.
export function hasMoreThanFourHoursPassed() {
      let animalsFromLS = localStorage.getItem("animalsList");
      let animalObjectsFromLS: IAnimals[] = JSON.parse(animalsFromLS || "[]");

      let alertList = animalObjectsFromLS.map((animal: IAnimals) => {
        if ((new Date().getTime() - Date.parse(animal.lastFed)) >= feedAlertIntervalHigh) {
          return (
            <Link key={animal.id} to={"/animal/" + animal.id}>
              <p>
                It has been more than 4 hours since<br></br>
                {animal.name} has been fed!
              </p>
            </Link>
            )
        };
      })

      return (<div className="alert-container">{alertList}</div>);
};