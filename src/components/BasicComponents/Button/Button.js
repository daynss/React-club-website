import React from "react";

const Button = ({ label, type = "button", renderIcon = false, onClick }) => (
  <button className={`button`} type={type} onClick={onClick}>
    <span>{label} </span>
    {renderIcon}
  </button>
);

export default Button;
