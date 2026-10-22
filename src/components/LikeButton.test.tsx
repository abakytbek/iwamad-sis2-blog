// @vitest-environment jsdom

import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'

afterEach(() => {
  cleanup()
})

describe('LikeButton', () => {
  it('displays the current like count', () => {
    render(<LikeButton count={3} onLike={() => {}} />)

    expect(screen.getByText('3')).toBeTruthy()
  })

  it('calls onLike when clicked', async () => {
    const handleLike = vi.fn()
    const user = userEvent.setup()

    render(<LikeButton count={0} onLike={handleLike} />)

    await user.click(screen.getByRole('button'))

    expect(handleLike).toHaveBeenCalledOnce()
  })
})