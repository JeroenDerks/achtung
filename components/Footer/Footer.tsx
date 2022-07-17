import React, { useState } from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SignupForm from "components/SignupForm/SignupForm";
import { earthBrown } from "theme/colors";
import InlineLink from "components/InlineLink";

const Wrapper = styled(Box)({ background: earthBrown });

const Footer = () => {
  const [signupSuccess, setSignupSuccess] = useState<boolean>(false);
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
            {!signupSuccess && (
              <SignupForm handleSignupSuccess={() => setSignupSuccess(true)} />
            )}
            {signupSuccess && (
              <Typography variant="h4" mt={4}>
                Thanks for submitting the form.
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="caption" component="p" mt={1}>
              By submitting your email address, you agree to receive marketing
              emails from Propel, and accept our{" "}
              <InlineLink href="https://propel.me/content/terms-of-service">
                terms & conditions
              </InlineLink>
              {" and "}
              <InlineLink href="https://propel.me/content/privacy-policy">
                privacy policy.
              </InlineLink>
            </Typography>
          </Grid>
        </Grid>
      </Wrapper>
    </footer>
  );
};

export default Footer;
