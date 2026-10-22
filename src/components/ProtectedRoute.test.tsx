// @vitest-environment jsdom

import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router'
import ProtectedRoute from './ProtectedRoute'

afterEach(() => {
  cleanup()
})

describe('ProtectedRoute', () => {
  it('redirects unauthenticated users to Login', () => {
    render(
      <MemoryRouter initialEntries={['/my-space']}>
        <Routes>
          <Route path="/login" element={<h1>Login Page</h1>} />

          <Route
            element={<ProtectedRoute isAuthenticated={false} />}
          >
            <Route
              path="/my-space"
              element={<h1>My Space</h1>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Login Page')).toBeTruthy()
    expect(screen.queryByText('My Space')).toBeNull()
  })

  it('allows authenticated users to access My Space', () => {
    render(
      <MemoryRouter initialEntries={['/my-space']}>
        <Routes>
          <Route path="/login" element={<h1>Login Page</h1>} />

          <Route
            element={<ProtectedRoute isAuthenticated={true} />}
          >
            <Route
              path="/my-space"
              element={<h1>My Space</h1>}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('My Space')).toBeTruthy()
    expect(screen.queryByText('Login Page')).toBeNull()
  })
})