import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimals } from "../models/IAnimals";
import "./ShowAnimals.css";

export function GetAnimals() {
    const [animals, setAnimals] = useState<IAnimals[]>([]);//Skapar state för att lagra data från API:et.

    //useEffect-hook med enkel felhantering.
    useEffect(() => {
        if(animals.length !== 0) return;

       getData(); 
    }, [animals.length]);

    //getData() använder axios för http-anrop till API:et.
    function getData() {
        axios
            .get<IAnimals[]>("https://animals.azurewebsites.net/api/animals")
            .then((response) => {
                setAnimals(response.data);
            });
    };

    //animalsHtmlList håller en lista/array med JSX-element som beskriver hur info från
    //API:et ska visas i webbläsaren. (Temporärt!!!)
    let animalsHtmlList = animals.map((animal) => {
        return (<div key={animal.id} className="animal-container">
            <h3>{animal.name} - ({animal.yearOfBirth})</h3>
            <div className="img-container">
                <img src={animal.imageUrl} alt={animal.name}/>
            </div>
            <div className="short-descript">{animal.shortDescription}</div>
        </div>)
    })

    return (animalsHtmlList)
};