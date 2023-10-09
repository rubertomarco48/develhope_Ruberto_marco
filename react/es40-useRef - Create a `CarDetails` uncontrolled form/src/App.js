import React from "react";
import CarDetails  from "./CarDetails";

export class App extends React.Component {


  render() {
    return (
      <div>
       <CarDetails initialData={{model:"MODEL", year : "2000-01" , color : "#FF0000"}}/>
      </div>
    );
  }
}
