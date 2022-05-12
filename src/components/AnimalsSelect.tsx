import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import "./../styles/AnimalsSelect.css";
import { GetAnimals } from "./GetAnimals";

export const AnimalsSelect = () => {
    const [animals, setAnimals] = useState<IAnimals[]>([]);

    useEffect(() => {
        if (animals.length !== 0) {
            return;
        }
        GetAnimals().then((animals) => {
            setAnimals(animals);
        });
    }, []);

    return (<div className="menu-container">
        {animals.map((animal: IAnimals) => {
            return (
                <Link key={animal.id} to={"/animal/" + animal.id}>
                    <h5>{animal.name}</h5>
                    <img src={animal.imageUrl} alt={animal.name}/>
                </Link>
            );
        })}
    </div>)
};