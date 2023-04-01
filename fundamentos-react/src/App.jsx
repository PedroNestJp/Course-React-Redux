import React from "react";
import Card from "./components/layout/Card";
import Randon from "./components/basics/Randon";
import FirstComp from "./components/basics/FirstComp";
import WithParams from "./components/basics/WithParams";
import './App.css'

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="Randon Number">
          <Randon min={1} max={60} />
        </Card>
        <Card titulo="First Component">
          <FirstComp />
        </Card>
        <Card titulo="With Params">
          <WithParams aluno="Pedro" nota={7.0} />
          <WithParams aluno="Silva" nota={9.5} />
        </Card>
      </div>
    </div>
  );
}
