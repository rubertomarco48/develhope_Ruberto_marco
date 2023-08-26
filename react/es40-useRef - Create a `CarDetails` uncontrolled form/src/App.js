import React from "react";
import { CarDetails } from "./CarDetails";

export class App extends React.Component {


  render() {
    return (
      <div>
       <CarDetails initialData={{ModelD:"MODELLO", YearD : "2000-01" , ColorD : "#FF0000"}}/>
      </div>
    );
  }
}
