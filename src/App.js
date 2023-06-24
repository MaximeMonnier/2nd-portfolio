import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./components/Theme";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>App File</ThemeProvider>
    </>
  );
}

export default App;
