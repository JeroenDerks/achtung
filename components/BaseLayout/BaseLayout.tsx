import React from "react";
import Box from "@mui/material/Box";
import { MAX_WIDTH } from "theme/spacing";
import { s10, s9 } from "theme/spacing";

const BaseLayout = ({
  background,
  children,
}: {
  background?: string;
  children: React.ReactNode;
}) => {
  return (
    <Box display="flex" justifyContent="center" sx={{ background }}>
      <Box width={MAX_WIDTH} px={s9} py={s10}>
        {children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
