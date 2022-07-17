import React from "react";
import styled from "@emotion/styled";
import theme from "theme";

const ButtonComponent = styled("button")({
  border: "none",
  background: "transparent",
  borderRadius: 4,
  "&:focus": { outline: "none", background: "#ffffff88" },
  [theme.breakpoints.down("sm")]: { fontSize: 22 },
  [theme.breakpoints.up("sm")]: { fontSize: 32 },
  [theme.breakpoints.up("md")]: { fontSize: 40 },
  cursor: "pointer",
});

const Button = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "submit";
}) => {
  return <ButtonComponent type={type}>{children}</ButtonComponent>;
};

export default Button;
