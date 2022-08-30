import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ContactionsProvider } from "./contexts/Contexts";
import { Router } from "./Router";
import { GloabalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default"

export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <GloabalStyle />
      <ContactionsProvider>
        <Router />
      </ContactionsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}


