import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { aspekPenilaian } from "./constant";
import Select from "./Select";

const FormColumn = ({ idMhs, nameMhs }) => {
  return (
    <div className="form-column">
      <div className="profile">
        <HiOutlineUserCircle size={24} />
        <p>{nameMhs}</p>
      </div>
      <div className="select-container">
        {aspekPenilaian.map((ap) => {
          return <Select key={ap.id} idAspek={ap.id} idMhs={idMhs} />;
        })}
      </div>
    </div>
  );
};

export default FormColumn;
