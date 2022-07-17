import React from "react";
import styled from "@emotion/styled";
import LoadingButton from "@mui/lab/LoadingButton";
import theme from "theme";
import { charcoal } from "theme/colors";

const ButtonComponent = styled(LoadingButton)({
  border: "none",
  background: "transparent",
  "&:focus": { outline: "none", background: "#ffffff88" },
  [theme.breakpoints.down("sm")]: { fontSize: 22 },
  [theme.breakpoints.up("sm")]: { fontSize: 32 },
  [theme.breakpoints.up("md")]: { fontSize: 40 },
  color: charcoal,
  textTransform: "capitalize",
});

const Button = ({
  children,
  loading,
  type,
}: {
  children: React.ReactNode;
  loading: boolean;
  type: "submit";
}) => {
  return (
    <ButtonComponent type={type} loading={loading}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
