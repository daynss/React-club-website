import React from "react";

const Button = ({
  label,
  type = "button",
  renderIcon = false,
  onClick,
  kind = "primary",
}) => {
  const classNames = {
    primary: "button-primary",
    danger: "button-danger",
    ghost: "button-ghost",
  };
  return (
    <button
      className={`button ${classNames[kind]}`}
      type={type}
      onClick={onClick}
    >
      <span>{label} </span>
      {renderIcon}
    </button>
  );
};

export default Button;
