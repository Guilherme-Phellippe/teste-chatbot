import { BrowserRouter, Routes, Route } from "react-router-dom"
import Chat from "./pages/chat"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Site em construção.</h1>} />
        <Route path="/:store_name" element={<Chat />} />
        <Route path="/client-not-found" element={<h1>Client not found</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
