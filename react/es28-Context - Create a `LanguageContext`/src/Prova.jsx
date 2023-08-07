
import { LanguageContext } from "./LanguageContext";

export function Prova(){
    
    return(
        <LanguageContext.Consumer>
             {language => {return language === "it" ? "CIAO" : "Hello"}}
        </LanguageContext.Consumer>
        
    )
}