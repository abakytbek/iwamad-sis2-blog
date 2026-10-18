import { Routes, Route } from 'react-router'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App