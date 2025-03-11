import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import {HashRouter} from 'react-router-dom'
// import { BrowserRouter } from "react-router-dom"
import { defaultTheme } from "./styles/themes/default"
import { CartContextProvider } from "./contexts/CartProvider"
import { Router } from "./Router"


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle> 

      <HashRouter>
        <CartContextProvider>
           <Router></Router>
            
        </CartContextProvider>
        </HashRouter>
    </ThemeProvider> 
  )
}


