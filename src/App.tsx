import { BrowserRouter, Routes, Route } from "react-router-dom"
import Chat from "./pages/chat"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<h1>login</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
