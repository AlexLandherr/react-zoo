import { Link } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import "./../styles/AnimalsSelect.css";

export const AnimalsSelect = () => {
    let animalsFromLS = localStorage.getItem("animalsList");
    let animalObjectsFromLS = JSON.parse(animalsFromLS || "[]");

    return (<div className="menu-container">
        {animalObjectsFromLS.map((animal: IAnimals) => {
            return (
                <Link to={"/animal/" + animal.id}>
                    <h5>{animal.name}</h5>
                    <img src={animal.imageUrl} alt={animal.name}/>
                </Link>
            );
        })}
    </div>)
};