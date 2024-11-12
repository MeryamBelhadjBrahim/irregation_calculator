import React from "react";
import Select from "react-select";
import { Card, CardBody, Button, Input } from "reactstrap";

import DoseImage from "../assets/OIP.jfif";

import "../App.css";

export default function Dose() {
  let types = [
    { label: "Arboriculture", value: "Arboriculture" },
    { label: "Maraîchage", value: "Maraîchage" },
    { label: "Grandes cultures", value: "Grandes_cultures" },
  ];
  let Arboriculture = [
    { label: "Palmier datier", value: 3 },
    { label: "Citrus", value: 1.5 },
    { label: "Cotton", value: 0.8 },
  ];
  let Maraîchage = [
    { label: "Pomme de terre", value: 0.7 },
    { label: "Poivre", value: 0.5 },
    { label: "Tomate", value: 0.6 },
  ];
  let Grandes_cultures = [{ label: "Grain", value: 0.7 }];
  let evaporation = {
    Grain: 2.5,
    Tomate: 2.5,
    Poivre: 2.6,
    "Pomme de terre": 2.13,
    Cotton: 4,
    Citrus: 7.17,
    "Palmier datier": 9.8,
  };
  let sols = [
    { label: "sols lourds ", value: 0.2 },
    { label: "sols moyens ", value: 0.25 },
    { label: "sols legers ", value: 0.33 },
  ];
  const [typeCulture, setTypeCulture] = React.useState("");
  const [typeSol, setTypeSol] = React.useState("");
  const [inputTypeCulture, setInputTypeCulture] = React.useState(false);
  const [inputTypeSol, setInputTypeSol] = React.useState(false);
  const [inputPlante, setInputPlante] = React.useState(false);
  const [plante, setPlante] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [inputAge, setInputAge] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [result, setResult] = React.useState("");
  function handleCalculate() {
    if (typeCulture === "") {
      setInputTypeCulture(true);
    }
    if (typeSol === "") {
      setInputTypeSol(true);
    }
    if (plante === "") {
      setInputPlante(true);
    }
    if (typeCulture !== "" && typeSol !== "" && plante !== "") {
      let ETC = evaporation[plante.label];
      let humidité = typeSol.value;
      let RFU = (2 / 3) * plante.value * humidité;
      setResult(RFU + ETC);
      localStorage.setItem("besoin", JSON.stringify(RFU + ETC));
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${DoseImage})`,
        backgroundSize: "contain",
        height: "100vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "25px",
          fontSize: "50px",
        }}
      >
        Liste des parametres
      </div>
      <Card
        style={{
          width: "50%",
          marginLeft: "25%",
        }}
      >
        <CardBody>
          <form style={{ width: "50%", marginLeft: "20%" }}>
            <div className="mb-3">
              <h6>Type de culture</h6>
              <Select
                options={types}
                value={typeCulture}
                onChange={(e) => {
                  setTypeCulture(e);
                  setPlante("");
                  setOptions(
                    e.value === "Grandes_cultures"
                      ? [...Grandes_cultures]
                      : e.value === "Maraîchage"
                      ? [...Maraîchage]
                      : [...Arboriculture]
                  );
                  setInputTypeCulture(false);
                  setResult("");
                }}
              />
              {inputTypeCulture ? (
                <div style={{ color: "red" }}>
                  Veuillez selectionner le type de culture
                </div>
              ) : null}
            </div>
            {typeCulture !== "" ? (
              <div className="mb-3">
                <h6>Plante</h6>
                <Select
                  options={options}
                  value={plante}
                  onChange={(e) => {
                    setPlante(e);
                    setInputPlante(false);
                    setResult("");
                  }}
                />

                {inputPlante ? (
                  <div style={{ color: "red" }}>
                    Veuillez selectionner le nom du plante
                  </div>
                ) : null}
              </div>
            ) : null}
            {plante.label === "Palmier datier" ? (
              <div className="mb-3">
                <h6>age du plante</h6>
                <Input
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                    setInputAge(false);
                    setResult("");
                  }}
                />
                {inputAge ? (
                  <div style={{ color: "red" }}>
                    Veuillez saisir l'age du palmier
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className="mb-3">
              <h6>Type de sol</h6>
              <Select
                options={sols}
                value={typeSol}
                onChange={(e) => {
                  setTypeSol(e);
                  setInputTypeSol(false);
                  setResult("");
                }}
              />
              {inputTypeSol ? (
                <div style={{ color: "red" }}>
                  Veuillez selectionner le type du sol
                </div>
              ) : null}
            </div>
            <Button
              onClick={handleCalculate}
              style={{ width: "100%", marginBottom: "2%" }}
            >
              Calculer
            </Button>
            {result !== "" ? (
              <div>
                Le besoin de la plante en eau est égal à {result} mm/jour
              </div>
            ) : null}
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
