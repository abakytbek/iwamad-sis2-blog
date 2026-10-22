import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Contact from './pages/Contact'
import PostDetail from './pages/PostDetail'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import MySpace from './pages/MySpace'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('likeCounts')
      const parsed: unknown = saved ? JSON.parse(saved) : {}

      if (
        typeof parsed !== 'object' ||
        parsed === null ||
        Array.isArray(parsed)
      ) {
        return {}
      }

      return Object.fromEntries(
        Object.entries(parsed).filter(
          ([, count]) =>
            typeof count === 'number' &&
            Number.isFinite(count) &&
            count >= 0
        )
      )
    } catch {
      return {}
    }
  })

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('likeCounts', JSON.stringify(likeCounts))
  }, [likeCounts])

  function addLike(postId: string) {
    setLikeCounts((current) => ({
      ...current,
      [postId]: (current[postId] || 0) + 1,
    }))
  }

  function handleLogin() {
    setIsAuthenticated(true)
    navigate('/my-space')
  }

  function handleLogout() {
    setIsAuthenticated(false)
    navigate('/login')
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="posts"
          element={
            <Posts
              likeCounts={likeCounts}
              onAddLike={addLike}
            />
          }
        />

        <Route path="contact" element={<Contact />} />

        <Route
          path="posts/:id"
          element={
            <PostDetail
              likeCounts={likeCounts}
              onAddLike={addLike}
            />
          }
        />

        <Route
          path="login"
          element={<Login onLogin={handleLogin} />}
        />

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route
            path="my-space"
            element={<MySpace onLogout={handleLogout} />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App