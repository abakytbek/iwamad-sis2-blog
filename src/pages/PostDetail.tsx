import { Link, useParams } from 'react-router'
import { posts } from '../data/posts'
import LikeButton from '../components/LikeButton'

type PostDetailProps = {
  likeCounts: Record<string, number>
  onAddLike: (postId: string) => void
}

function PostDetail({
  likeCounts,
  onAddLike,
}: PostDetailProps) {
  const { id } = useParams<{ id: string }>()

  const post = posts.find((item) => item.id === id)

  if (!post) {
    return (
      <section className="section">
        <div className="container post-detail">
          <h1>Post not found</h1>
          <p>This post does not exist.</p>
          <Link to="/posts">← Back to posts</Link>
        </div>
      </section>
    )
  }

  return (
    <article className="section">
      <div className="container post-detail">

        <Link to="/posts" className="back-link">
          ← All posts
        </Link>

        <header className="post-detail-header">
          <h1>{post.title}</h1>

          <p className="post-detail-excerpt">
            {post.excerpt}
          </p>
        </header>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="post-detail-image"
          />
        )}

        <div className="post-body">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {post.note && (
          <aside className="side-note">
            <h2>My side note</h2>
            <p>{post.note}</p>
          </aside>
        )}

        <div className="post-interactions">
          <LikeButton
            count={likeCounts[post.id] || 0}
            onLike={() => onAddLike(post.id)}
          />
        </div>

        <Link to="/posts" className="back-link">
          ← Back to all posts
        </Link>

      </div>
    </article>
  )
}

export default PostDetail