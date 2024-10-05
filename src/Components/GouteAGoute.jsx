import React from "react";
import Select from "react-select";
import { Card, CardBody, Button } from "reactstrap";

export default function GouteAGoute() {
  let types = [
    { label: "Arboriculture", value: "Arboriculture" },
    { label: "Maraîchage", value: "Maraîchage" },
    { label: "Grandes cultures", value: "Grandes cultures" },
  ];
  let data = {
    Arboriculture: { N: 2, EC: 0.87, Q: 1.9, L: 300 },
    Maraîchage: { N: 1, EC: 0.4, Q: 0.8, L: 50 },
    "Grandes cultures": { N: 1, EC: 0.4, Q: 1.1, L: 100 },
  };
  let sols = [
    { label: "sols lourds ", value: 0.75 },
    { label: "sols moyens ", value: 0.58 },
    { label: "sols legers ", value: 0.35 },
  ];
  const [typeCulture, setTypeCulture] = React.useState("");
  const [typeSol, setTypeSol] = React.useState("");
  const [inputTypeCulture, setInputTypeCulture] = React.useState("");
  const [inputTypeSol, setInputTypeSol] = React.useState("");
  const [result, setResult] = React.useState("");
  function handleCalculate() {
    if (typeCulture === "") {
      setInputTypeCulture(true);
    }
    if (typeSol === "") {
      setInputTypeSol(true);
    }
    if (typeCulture !== "" && typeSol !== "") {
      let E = (typeSol.value + data[typeCulture.value].EC) / 2;
      let PL =
        (data[typeCulture.value].Q * data[typeCulture.value].N) /
        (E * data[typeCulture.value].L);

      setResult(PL);
    }
  }

  return (
    <React.Fragment>
      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "50px",
        }}
      >
        Calcul de pluviométrie de goutteur (PL)
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
              <div>La pluviométrie est égal à {result}</div>
            ) : null}
          </form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
