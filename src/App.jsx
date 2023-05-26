import React, { useState } from "react";
import { mahasiswa } from "./constant";
import "./App.css";
import FormColumn from "./FormColumn";

const App = () => {
  const [nilaiReport, setNilaiReport] = useState("");
  function submitNilai(e) {
    e.preventDefault();

    const form = e.target;
    let nilaiObj = {};

    for (const f of form) {
      const nameArr = f.name.split(".");
      const aspek = nameArr[0];
      const mhs = nameArr[1];
      const nilai = f.value;

      nilaiObj[aspek] = {
        ...nilaiObj[aspek],
        [mhs]: nilai,
      };
    }

    delete nilaiObj[""];
    const nilaiJSON = JSON.stringify(nilaiObj);
    setNilaiReport(nilaiJSON);
  }

  return (
    <div>
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <form onSubmit={submitNilai}>
        <div className="form-header">
          <h3>Aspek Penilaian 1</h3>
          <h3>Aspek Penilaian 2</h3>
          <h3>Aspek Penilaian 3</h3>
          <h3>Aspek Penilaian 4</h3>
        </div>
        {mahasiswa.map((m) => (
          <FormColumn key={m.id} idMhs={m.id} nameMhs={m.name} />
        ))}
        <button className="btnSave" type="submit">
          Simpan
        </button>
      </form>
      <div className="report">
        <h4>Hasil Penilaian : </h4>
        {nilaiReport && <p>{nilaiReport}</p>}
      </div>
    </div>
  );
};

export default App;
