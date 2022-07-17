import React from "react";
import styled from "@emotion/styled";
import theme from "theme";

const InputComponent = styled("input")({
  border: "none",
  width: "100%",
  background: "transparent",
  "&:focus": { outline: "none" },
  [theme.breakpoints.down("sm")]: { fontSize: 42 }, // mobile
  [theme.breakpoints.up("sm")]: { fontSize: 72 }, // tablet
  [theme.breakpoints.up("md")]: { fontSize: 110 }, // desktop
});

const Input = ({
  placeholder,
  id,
  name,
  onChange,
}: {
  placeholder: string;
  id: string;
  name: string;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}) => {
  return (
    <InputComponent
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
