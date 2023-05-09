import { css, Global, useTheme } from "@emotion/react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        html,
        body {
          font-family: ${inter.style.fontFamily};
          background-color: ${theme.colors.black300};
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      `}
    />
  );
};
