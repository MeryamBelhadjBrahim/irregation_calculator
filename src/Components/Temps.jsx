import React from "react";
import { Card, CardBody, Button, Input } from "reactstrap";
import Select from "react-select";
import bassin from "../assets/bassin.webp";

export default function Temps() {
  let pentes = [
    { label: 0.2, value: 0.2 },
    { label: 0.3, value: 0.3 },
    { label: 0.4, value: 0.4 },
    { label: 0.5, value: 0.5 },
    { label: 0.6, value: 0.6 },
    { label: 0.8, value: 0.8 },
    { label: 1, value: 1 },
  ];

  const [debit, setDebit] = React.useState(0);
  const [inputDebit, setInputDebit] = React.useState("");
  const [result, setResult] = React.useState(0);

  function handleCalculate() {
    let besoin = JSON.parse(localStorage.getItem("besoin"));
    let F = (besoin * 10) / debit;
    setResult(F);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bassin})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {" "}
      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "50px",
          color: "white",
        }}
      >
        Calcul de temps d'irrigation
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
              <h6>Debit (h)</h6>
              <Input
                type="number"
                min={0}
                value={debit}
                onChange={(e) => {
                  setDebit(e.target.value);
                  setInputDebit(false);
                  setResult(0);
                }}
              />
              {inputDebit ? (
                <div style={{ color: "red" }}>Veuillez saisir le rayon</div>
              ) : null}
            </div>
            <Button
              onClick={handleCalculate}
              style={{ width: "100%", marginBottom: "2%" }}
            >
              Calculer
            </Button>
            {debit !== 0 ? (
              <div>le temps d'irrigation est égale à {result} h</div>
            ) : null}
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
