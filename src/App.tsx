import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { defaultTheme } from "./styles/themes/default"
import { CartContextProvider } from "./contexts/CartProvider"
import { Router } from "./Router"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle> 

      <BrowserRouter>
        <CartContextProvider>
           <Router></Router>
            
        </CartContextProvider>
        </BrowserRouter>
    </ThemeProvider> 
  )
}


