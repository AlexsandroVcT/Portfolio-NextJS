import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./globals";
// Erro: A hidratação falhou porque a interface do usuário inicial não corresponde ao que foi renderizado no servidor.
export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
