import React from "react";

import { Button } from "./Button.styles";
import { Props } from "./Button.types";

const ButtonElement: React.FC<Props> = ({ label, width, type }) => {
  return (
    <Button width={width} type={type}>
      {label}
    </Button>
  );
};

export default ButtonElement;
