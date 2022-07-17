import React from "react";
import Image, { StaticImageData } from "next/image";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import theme from "theme";
import { s8 } from "theme/spacing";

const ImageContainer = styled(Box)({
  overflow: "hidden",
  transition: "all .1s",
  [theme.breakpoints.down("sm")]: {
    height: 531,
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    height: 1015,
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
  },
  [theme.breakpoints.up("md")]: {
    height: 1200,
    borderTopLeftRadius: "15%",
    borderTopRightRadius: "15%",
  },
  [theme.breakpoints.up("lg")]: {
    height: 1200,
    borderTopLeftRadius: "35%",
    borderTopRightRadius: "35%",
  },
  position: "relative",
});

const BlogHeroImage = ({ alt, src }: { alt: string; src: StaticImageData }) => {
  return (
    <ImageContainer mt={s8} width={1}>
      <Image
        src={src}
        alt={alt}
        height="100%"
        width="100%"
        objectFit="cover"
        placeholder="blur"
        objectPosition="20% 50%"
        layout="fill"
      />
    </ImageContainer>
  );
};

export default BlogHeroImage;
