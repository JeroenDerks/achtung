import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SignupForm from "components/SignupForm/SignupForm";
import { earthBrown } from "theme/colors";

const Wrapper = styled(Box)({ background: earthBrown });

const Footer = () => {
  return (
    <footer>
      <Wrapper
        px={{ lg: 10, md: 5, sm: 2.5, xs: 2.5 }}
        py={{ lg: 13, md: 9, sm: 7.5, xs: 7.5 }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Typography variant="h2">Sign up for our newsletter</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SignupForm />
          </Grid>
        </Grid>
      </Wrapper>
    </footer>
  );
};

export default Footer;
