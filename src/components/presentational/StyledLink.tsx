import React from "react";
import { Link } from "react-router-dom";
import { Text } from "rebass";

import { css } from "emotion";

import { useTheme } from "emotion-theming";

export default function StyledLink(props: any) {
  const theme: any = useTheme();
  return (
    <Link
      to={props.to}
      className={css`
        color: ${theme.colors.primary};
        font-size: 16px;
        border-radius: 4px;
        text-decoration: none;
        &:hover {
          color: ${theme.colors.tertiary};
        }
      `}
    >
      <Text p={2} fontWeight="bold" color="primary">
        {props.children}
      </Text>
    </Link>
  );
}
