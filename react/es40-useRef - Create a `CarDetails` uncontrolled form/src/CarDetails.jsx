import { useState } from "react"

export function CarDetails({initialData}) {
    const {initValueModel,initValueYear,initValueColor}= initialData
    const [modello,setModello]=useState(initValueModel)
    const [anno,setAnno]=useState(initValueYear)
    const [colore,setColore]= useState(initValueColor)
const handleChangeModel=(e)=>{
    setModello(e.target.value)
}
const handleChangeYear=(e)=>{    
    setAnno(e.target.value)    
}
const handleChangeColor=(e)=>{
    setColore(e.target.value)    
}
const stile ={
    backgroundColor: "#008000",
    display : "flex",
    flexDirection:"column",
    alignItems:"center",
    padding:"1rem",
    borderRadius:"1rem",
    gap:"1rem"
}

    return(
        <form style = {stile}>
            <label for="model">Inserisci il Modello</label>
            <input type="text" onChange={handleChangeModel} name="model" id="model" value={modello}/>
            
            <label for="year">Inserisci l'anno e il mese di immatricolazione</label>
            <input type="month" onChange={handleChangeYear} name="year" id="year" value={anno}/>
            
            <label for="color">Inserisci il colore</label>
            <input type="color" onChange={handleChangeColor} name="color" id="color" value={colore}/>
            
            <button type="submit">INVIA</button>
        </form>
    )
}