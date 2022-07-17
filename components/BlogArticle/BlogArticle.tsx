import React from "react";
import BlogHeroImage from "./partials/BlogHeroImage";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Section from "components/Section";
import Typography from "@mui/material/Typography";
import heroImage from "public/images/hero.jpg";
import { s11, s7 } from "theme/spacing";

const BlogArticle = () => {
  return (
    <Section>
      <Grid container columns={{ xs: 6, sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={6} md={8} lg={8}>
          <Typography variant="h2">
            We reimagine marine propulsion, setting course for better currents.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={8} lg={12}>
          <BlogHeroImage src={heroImage} alt="boat" />
        </Grid>

        {/* Empty grid item to provide offset for text */}
        <Grid item xs={0} sm={0} md={1} lg={5} />
        <Grid item xs={6} sm={6} md={7} lg={7}>
          <Box my={s11}>
            <Typography variant="h4" mb={s7}>
              The first cars were designed to look like horse-drawn carriages,
              without the horses. Because that’s what people knew. When
              designing our electric in- and outboard motors, we wouldn’t make
              that mistake.
            </Typography>
            <Typography variant="h4" mb={s7}>
              Sure, we weren’t the only ones to see what’s wrong with fossil
              fuel powered motors. The noise, pollution and maintenance.
              However, most motor companies simply replaced internal combustion
              engines with an electric motor and called it a day. They made do.
              That’s not us.
            </Typography>
            <Typography variant="h4">
              We don’t make do, we do better. We are at the dawn of the Electric
              Age. And it’s a great time to come aboard.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default BlogArticle;
