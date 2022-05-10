import { useParams } from "react-router-dom";
import { IAnimals } from "../models/IAnimals";
import "./../styles/ShowAnimal.css";

export const ShowAnimal = () => {
    let params = useParams();
    let animalsFromLS = localStorage.getItem("animalsList");
    let animalObjectsFromLS: IAnimals[] = JSON.parse(animalsFromLS || "[]");

    return (<div className="detailed-info-container">
        <div className="detailed-info">
            <img src={animalObjectsFromLS[Number(params.id) - 1].imageUrl} alt={animalObjectsFromLS[Number(params.id) - 1].name}/>
            <section>
                <p>
                    Name: {animalObjectsFromLS[Number(params.id) - 1].name}<br></br>
                    Latin Name: {animalObjectsFromLS[Number(params.id) - 1].latinName}<br></br>
                    Year of Birth: {animalObjectsFromLS[Number(params.id) - 1].yearOfBirth}<br></br>
                    Medication: {animalObjectsFromLS[Number(params.id) - 1].medicine}<br></br>
                    Has been fed: {String(animalObjectsFromLS[Number(params.id) - 1].isFed)}
                </p>
            </section>
            <textarea value={animalObjectsFromLS[Number(params.id) - 1].longDescription}></textarea>
        </div>
    </div>);
};