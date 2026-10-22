type LikeButtonProps = {
  count: number
  onLike: () => void
}

function LikeButton({ count, onLike }: LikeButtonProps) {
  return (
    <button
      type="button"
      className="like-button"
      onClick={onLike}
      aria-label={`Like this post. ${count} likes`}
    >
      <span>♥ Like</span>
      <span className="like-count">{count}</span>
    </button>
  )
}

export default LikeButton