import React from "react";

// Componente tonto / Dumb Components
export default props => {
  return <li onClick={props.onClick}>{props.user.name} </li>;
};
