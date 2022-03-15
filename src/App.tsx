import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { Home } from 'pages'
import { HOME } from 'routes'
import { GlobalStyle } from 'ui'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import themes from 'config/themes'

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
