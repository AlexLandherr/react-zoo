import axios from "axios";
import { IAnimals } from "../models/IAnimals";

export async function GetAnimals(): Promise<IAnimals[]> {
        if (localStorage.getItem("animalsList")) {
            let animalsFromLS = localStorage.getItem("animalsList");
            return JSON.parse(animalsFromLS || "[]");
        }
        const response = await axios
            .get<IAnimals[]>("https://animals.azurewebsites.net/api/animals")
            
        let animalsAsText = JSON.stringify(response.data);
        localStorage.setItem("animalsList", animalsAsText);
        return response.data;

    //animalsHtmlList håller en lista/array med JSX-element som beskriver hur info från
    //API:et ska visas i webbläsaren. (Temporärt!!!)
/*     let animalsHtmlList = animals.map((animal) => {
        return (<div key={animal.id} className="animal-container">
            <h3>{animal.name} - ({animal.yearOfBirth})</h3>
            <div className="img-container">
                <img src={animal.imageUrl} alt={animal.name}/>
            </div>
            <div className="short-descript">{animal.shortDescription}</div>
        </div>)
    }) */
};