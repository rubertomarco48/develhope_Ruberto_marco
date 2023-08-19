import React from "react";
import { CarDetails } from "./CarDetails";

export class App extends React.Component {


  render() {
    return (
      <div>
        <script src="https://cdn.tailwindcss.com"></script>
       <CarDetails initialData={{initValueModel:"MODELLO", initValueYear : "2000-01" , initValueColor : "#FF0000"}}/>
      </div>
    );
  }
}
