import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import "./../styles/ShowAnimal.css";
import { feedAlertIntervalLow } from "./feedAlertIntervals";
import { handleClick } from "./handleClick";

export const ShowAnimal = () => {
  const [animal, setAnimal] = useState<IAnimals>({
    id: "0",
    name: "",
    latinName: "",
    yearOfBirth: 0,
    shortDescription: "",
    longDescription: "",
    imageUrl: "",
    medicine: "",
    isFed: false,
    lastFed: "",
  });

  let params = useParams();
  useEffect(() => {
    let animalsFromLS = localStorage.getItem("animalsList");
    let animalObjectsFromLS: IAnimals[] = JSON.parse(animalsFromLS || "[]");
    setAnimal(animalObjectsFromLS[Number(params.id) - 1]);
  }, []);
  let feedStatus: JSX.Element = <></>;

  let lastFedTS = animal.lastFed;
  let milliSecs = Date.parse(lastFedTS);
  let currentTime = new Date();
  let currentMilliSecs = currentTime.getTime();
  let timePassed = currentMilliSecs - milliSecs; //Triggers at 10800000 milliseconds.

  feedStatus = (
    <>
      <div className="detailed-info-container">
        <div className="detailed-info">
          <img src={animal.imageUrl} alt={animal.name} />
          <section>
            <p>
              Name: {animal.name}
              <br></br>
              Latin Name: {animal.latinName}
              <br></br>
              Year of Birth: {animal.yearOfBirth}
              <br></br>
              Medication: {animal.medicine}
              <br></br>
              {/* Has been fed: {String(animal.isFed)} */}
            </p>
          </section>
          <textarea value={animal.longDescription} readOnly></textarea>
        </div>
        { timePassed >= feedAlertIntervalLow ?  (
            <button
              onClick={() => {
                setAnimal(handleClick(animal, Number(params.id)));
              }}
            >
              Feed animal
            </button>
         ) : (
            <div className="lack-of-btn-msg">
              Animal is still full, last feed time was: {animal.lastFed}
            </div>
         )
        }
      </div>
    </>
  );

  return <>{feedStatus}</>;
};
