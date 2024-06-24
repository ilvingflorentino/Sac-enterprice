"use client";
import React from "react";
import { InputNumber, Select, Button } from "antd";
import "./index.css";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

function GenerarLicencias() {
  return (
    <div className="container">
      <div className="select-container">
        <link rel="icon" href={"Favicon.ico"}></link>
        <img src={"Sac.jpg"} alt="Sac Software Logo" className="custom-image" />
        <h1>License Creator</h1>

        <div className="horizontal-elements">
          <div className="element">
            <h3>Tipo de Licencia</h3>
            <Select
              showSearch
              placeholder="Escoger"
              optionFilterProp="label"
              onChange={onChange}
              onSearch={onSearch}
              options={[
                {
                  value: "Basic",
                  label: "Basic",
                },
                {
                  value: "Premiun",
                  label: "Premiun",
                },
                {
                  value: "Standar",
                  label: "Standar",
                },
              ]}
            />
          </div>

          <div className="element">
            <h3>Tipo de Emision</h3>
            <Select
              showSearch
              placeholder="Escoger"
              optionFilterProp="label"
              onChange={onChange}
              onSearch={onSearch}
              options={[
                {
                  value: "Basic",
                  label: "Basic",
                },
                {
                  value: "Premiun",
                  label: "Premiun",
                },
                {
                  value: "Standar",
                  label: "Standar",
                },
              ]}
            />
          </div>

          <div className="element">
            <h3>Cantidad</h3>
            <InputNumber min={0} />
          </div>

          <Button type="primary" className="custom-button">
            Generar Licencias
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GenerarLicencias;
