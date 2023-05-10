import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "theme";
import { GlobalStyles } from "global-styles";
import { Web3Provider } from "hooks/useProviderContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Web3Provider>
        <Component {...pageProps} />
        <ToastContainer />
      </Web3Provider>
    </ThemeProvider>
  );
}
