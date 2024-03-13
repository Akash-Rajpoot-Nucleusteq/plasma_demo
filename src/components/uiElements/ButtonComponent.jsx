import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function ButtonComponent({
  buttonText,
  className,
  type,
  variant,
  onClickHandler,
}) {
  return (
    <Button
      variant={variant}
      type={type || "button"}
      className={className}
      onClick={onClickHandler}>
      {buttonText}
    </Button>
  );
}
