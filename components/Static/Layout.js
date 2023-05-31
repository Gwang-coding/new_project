import Head from "next/head";
import theme from "../Styles/theme";
import { ThemeProvider } from "styled-components";
function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"
        />
      </Head>
      {children}
    </ThemeProvider>
  );
}

export default Layout;
