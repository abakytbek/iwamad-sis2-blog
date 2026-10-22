import type { Post } from '../types/post'
import { Link } from 'react-router'
import LikeButton from './LikeButton'

type PostCardProps = {
  post: Post
  likeCount: number
  onAddLike: (postId: string) => void
}

function PostCard({
  post,
  likeCount,
  onAddLike,
}: PostCardProps) {
  return (
    <article className="card post-card">
      <div className="post-card-content">
        <p className="post-meta">
          {post.category}
          {post.date && ` · ${post.date}`}
        </p>

        <h2>{post.title}</h2>

        <p className="post-excerpt">{post.excerpt}</p>

        <div className="post-card-actions">
          <Link to={`/posts/${post.id}`} className="post-link">
            Read more →
          </Link>

          <LikeButton
            count={likeCount}
            onLike={() => onAddLike(post.id)}
          />
        </div>
      </div>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="post-image"
        />
      )}
    </article>
  )
}

export default PostCard