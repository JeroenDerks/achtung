import React, { useState } from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SignupForm from "components/SignupForm/SignupForm";
import { earthBrown } from "theme/colors";
import InlineLink from "components/InlineLink";
import { s11, s8 } from "theme/spacing";
import SaiettaLogo from "components/SaiettaLogo";
import Section from "components/Section";

const Footer = () => {
  const [signupSuccess, setSignupSuccess] = useState<boolean>(false);

  return (
      <Section background={earthBrown}>
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
          <Grid item xs={3} sm={3} md={2}>
            <Box maxWidth={200} mt={s11}>
              <SaiettaLogo />
            </Box>
          </Grid>
          <Grid item xs={12} xl={12}>
            <Typography variant="caption" component="p" mt={s8}>
              Propel is part of Saietta Group PLC, London Stock Exchange ISIN
              GB00BNDM6X87
            </Typography>
            <Typography variant="caption" component="p">
              Saietta Europe B.V., Moleneind 23-A, 1241 NG Kortenhoef, The
              Netherlands, VAT ID: NL860265006B01, CoC: 75392631.
            </Typography>
            <Typography variant="caption" component="p">
              Copyright © Propel 2022
            </Typography>
          </Grid>
        </Grid>
      </BaseLayout>
  );
};

export default Footer;
