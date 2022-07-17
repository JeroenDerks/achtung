import React from "react";
import styled from "@emotion/styled";

const Link = styled("a")({ textDecoration: "underline" });

const InlineLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
};

export default InlineLink;
