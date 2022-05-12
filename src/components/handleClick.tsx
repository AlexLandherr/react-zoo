import { IAnimals } from "../models/IAnimals";

export function handleClick(animalObject: IAnimals, animalID: number): IAnimals {
    //Toggle isfed
    animalObject.isFed = !animalObject.isFed;
    console.log(animalObject.isFed);

    //Set time of last fed.
    let feedTime = new Date();
    let feedTimeString = feedTime.toISOString();
    animalObject.lastFed = feedTimeString;
    console.log(animalObject.lastFed);
    
    //Find animalsList from LS.
    let animalsFromLS = localStorage.getItem("animalsList");
    let animalObjectsFromLS: IAnimals[] = JSON.parse(animalsFromLS || "[]");
    
    //Find right animal obj in animalsList.
    //Overwrite animal obj in LS with updated animal obj.
    animalObjectsFromLS[animalID - 1] = animalObject;
    console.log(animalObjectsFromLS[animalID - 1]);
    
    //Save updated list to LS.
    let animalsAsText = JSON.stringify(animalObjectsFromLS);
    localStorage.setItem("animalsList", animalsAsText);
    console.log(animalsAsText);
    
    //return animal obj.
    return (animalObject);
};