import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from 'pages'
import { HOME } from 'routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
