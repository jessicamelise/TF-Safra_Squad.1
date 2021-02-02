import React from "react";
import { Input } from "../input/Input";
import { useHistory } from "react-router-dom";
import "./form.css";

export const Form = (props) => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/profile");
  };

  return (
    <form className="form-login">
      <label className="label-login">
        <Input className="input-login" onChange={props.onChangeLogin} placeholder="000.000.000-00" readOnly="readOnly"/>
      </label>
      <button className="button-login" onClick={handleClick}>Consultar</button>
    </form>
  );

};
