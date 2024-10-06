import React from "react";
import { Card, CardBody, Button, Input } from "reactstrap";
import Select from "react-select";
import bassin from "../assets/bassin.webp";

export default function ParBassin() {
  let pentes = [
    { label: 0.2, value: 0.2 },
    { label: 0.3, value: 0.3 },
    { label: 0.4, value: 0.4 },
    { label: 0.5, value: 0.5 },
    { label: 0.6, value: 0.6 },
    { label: 0.8, value: 0.8 },
    { label: 1, value: 1 },
  ];

  const [rayon, setRayon] = React.useState(0);
  const [inputRayon, setInputRayon] = React.useState("");
  const [pente, setPente] = React.useState("");
  const [inputPente, setInputPente] = React.useState("");
  const [surface, setSurface] = React.useState(0);
  const [hauteur, setHauteur] = React.useState(0);

  function handleCalculate() {
    let S = Math.PI * rayon * rayon;
    setSurface(S);
    let besoin = JSON.parse(localStorage.getItem("besoin"));
    let H = besoin + pente.value;
    setHauteur(H);
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
        Calcul de surface de bassin et de l'hauteur de diguette
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
              <h6>Rayon</h6>
              <Input
                type="number"
                min={0}
                value={rayon}
                onChange={(e) => {
                  setRayon(e.target.value);
                  setInputRayon(false);
                  setSurface(0);
                }}
              />
              {inputRayon ? (
                <div style={{ color: "red" }}>Veuillez saisir le rayon</div>
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
                  setHauteur(0);
                }}
              />
              {inputPente ? (
                <div style={{ color: "red" }}>
                  Veuillez selectionner la pente
                </div>
              ) : null}
            </div>
            <Button
              onClick={handleCalculate}
              style={{ width: "100%", marginBottom: "2%" }}
            >
              Calculer
            </Button>
            {surface !== 0 && hauteur !== 0 ? (
              <div>
                la surface de bassin est égale à {surface} m².
                <br />
                l'hauteur de diguette est égale à {hauteur} mm
              </div>
            ) : null}
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
