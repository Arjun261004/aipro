import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Study from './pages/Study'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ViewFiles from './pages/ViewFiles'
import Calendar from './pages/Calendar'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/study" element={<Study />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/files" element={<ViewFiles />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  )
}
