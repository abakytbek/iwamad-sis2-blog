import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

type PostsProps = {
  likeCounts: Record<string, number>
  onAddLike: (postId: string) => void
}

function Posts({ likeCounts, onAddLike }: PostsProps) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">My Posts</h1>

        {posts.length === 0 ? (
          <p className="section-description">
            Posts will be added soon.
          </p>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                likeCount={likeCounts[post.id] || 0}
                onAddLike={onAddLike}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Posts