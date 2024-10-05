import React from "react";
import Select from "react-select";
import { Card, CardBody, Button } from "reactstrap";

export default function ParBassin() {
  let debits = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 15, value: 15 },
    { label: 30, value: 30 },
    { label: 60, value: 60 },
    { label: 90, value: 90 },
  ];
  let data = {
    sableux: { 5: 35, 10: 65, 15: 100, 30: 200, 60: 400, 90: 600 },
    Limon_sableux: { 5: 100, 10: 200, 15: 300, 30: 600, 60: 1200, 90: 1800 },
    Limon_argileux: { 5: 200, 10: 400, 15: 600, 30: 1200, 60: 2400, 90: 3600 },
    argileux: { 5: 350, 10: 650, 15: 1000, 30: 2000, 60: 4000, 90: 6000 },
  };
  let superficie = [
    { label: "Sableux", value: "Sableux" },
    { label: "Limon sableux", value: "Limon sableux" },
    { label: "Limon argileux", value: "Limon argileux" },
    { label: "argileux", value: "argileux" },
  ];
  let pentes = [
    { label: 0.2, value: 0.2 },
    { label: 0.3, value: 0.3 },
    { label: 0.4, value: 0.4 },
    { label: 0.5, value: 0.5 },
    { label: 0.6, value: 0.6 },
    { label: 0.8, value: 0.8 },
    { label: 1, value: 1 },
  ];

  const [debit, setDebit] = React.useState("");
  const [typeSol, setTypeSol] = React.useState("");
  const [inputDebit, setInputDebit] = React.useState("");
  const [inputTypeSol, setInputTypeSol] = React.useState("");
  const [pente, setPente] = React.useState("");
  const [inputPente, setInputPente] = React.useState("");
  const [result, setResult] = React.useState("");
  function handleCalculate() {
    if (debit === "") {
      setInputDebit(true);
    }
    if (typeSol === "") {
      setInputTypeSol(true);
    }
    if (pente === "") {
      setInputPente(true);
    }
    if (typeSol === "") {
      setInputTypeSol(true);
    }
    if (pente !== "" && typeSol !== "" && debit !== "") {
      let valueSurface = data[typeSol][debit];
      let PL = 0;
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
        Calcul de surface de bassin
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
              <h6>Débit</h6>
              <Select
                options={debits}
                value={debit}
                onChange={(e) => {
                  setDebit(e);
                  setInputDebit(false);
                  setResult("");
                }}
              />
              {inputDebit ? (
                <div style={{ color: "red" }}>Veuillez selectionner débit</div>
              ) : null}
            </div>
            <div className="mb-3">
              <h6>Type de sol</h6>
              <Select
                options={superficie}
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
            <div className="mb-3">
              <h6>Pente</h6>
              <Select
                options={pentes}
                value={pente}
                onChange={(e) => {
                  setPente(e);
                  setInputPente(false);
                  setResult("");
                }}
              />
              {inputPente ? (
                <div style={{ color: "red" }}>
                  Veuillez selectionner la pente
                </div>
              ) : null}
            </div>
            <Button
              // onClick={handleCalculate}
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
