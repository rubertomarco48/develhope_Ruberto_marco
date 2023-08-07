import { useState } from "react";
import { Prova } from "./Prova";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
  const [lingua, setLingua] = useState("it");
  return (
    <>
      <select
        name="language"
        id="language"
        onChange={(e) => setLingua(e.target.value)}
        value={lingua}
      >
        <option value="it">Italiano</option>
        <option value="en">English</option>
      </select>

      <LanguageContext.Provider value={lingua}>
        <br></br>
        <Prova />
      </LanguageContext.Provider>
    </>
  );
}
