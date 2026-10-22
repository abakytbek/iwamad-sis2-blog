// @vitest-environment jsdom

import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import LikeButton from './LikeButton'

afterEach(() => {
  cleanup()
})

describe('LikeButton', () => {
  it('displays the current like count', () => {
    render(<LikeButton count={3} onLike={() => {}} />)

    expect(screen.getByText('3')).toBeTruthy()
  })

  it('calls onLike when clicked', () => {
    const handleLike = vi.fn()

    render(<LikeButton count={0} onLike={handleLike} />)

    fireEvent.click(screen.getByRole('button'))

    expect(handleLike).toHaveBeenCalledOnce()
  })
})