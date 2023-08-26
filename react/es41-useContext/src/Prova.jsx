
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Prova(){
    const language = useContext(LanguageContext)
    return(
             <p>{ language === "it" ? "CIAO" : "Hello"}</p>   
    )
}