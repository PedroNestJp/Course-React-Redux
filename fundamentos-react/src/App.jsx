import React from "react";
import Card from "./components/layout/Card";
import Randon from "./components/basics/Randon";
import FirstComp from "./components/basics/FirstComp";
import WithParams from "./components/basics/WithParams";
import Family from "./components/basics/Family";
import FamilyMenber from "./components/basics/FamilyMenber";
import "./App.css";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="Components With Children" color="#f0f">
          <Family lastName="Pontes">
            <FamilyMenber name="Pedro" lastName="Silva" />
            <FamilyMenber name="Miguel" lastName={props.lastName} />
            <FamilyMenber name="Gabriel" />
          </Family>
        </Card>
        <Card titulo="Randon Number" color="#f00">
          <Randon min={1} max={60} />
        </Card>
        <Card titulo="First Component" color="#0f0">
          <FirstComp />
        </Card>
        <Card titulo="With Params" color="#00f">
          <WithParams aluno="Pedro" nota={7.0} />
          <WithParams aluno="Silva" nota={9.5} />
        </Card>
      </div>
    </div>
  );
}
