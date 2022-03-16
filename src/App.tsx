import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ThemeProvider } from 'context/ThemeContext'

import { Home } from 'pages'
import { HOME } from 'routes'
import { GlobalStyle } from 'ui'

function App() {
  return (
    <ThemeProvider>
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
