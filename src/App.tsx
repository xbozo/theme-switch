import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import { useState } from "react";

import * as C from './styled';

import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function App() {
  const [theme, setTheme] = useState(light)

  const handleChangeTheme = () => {
    setTheme(theme.name === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <C.Container>
        <Header handleChangeTheme={handleChangeTheme} />
        <Home />
      </C.Container>
    </ThemeProvider>
  )  
}