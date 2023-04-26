import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          {/* <Route path="/products" element={<CountriesPage />} />
      <Route path="/states/:slug" element={<StatesPage />} />
      <Route path="/cities" element={<CitiesPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
