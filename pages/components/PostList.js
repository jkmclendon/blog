import PostCard from '@/pages/components/PostCard.js';
import PageNav from '@/pages/components/PageNav.js';

export default function PostList ({page, setPage, posts}) {

  if (!posts || !posts.rows || !page) {
    return null;
  }

  return (
    <div className="flex flex-row justify-between">
      <div className="w-2/3 m-12 p-8 flex flex-col items-center bg-primary bg-opacity-70 rounded-xl">
        <h1 className="navbar bg-gradient-to-r from-primary to transparent text-4xl text-neutral use-megrim">Posts</h1>
        {posts.rows.map((post, i) => <PostCard post={post} key={i} page={page}/>)}
        <PageNav page={page} numOfPosts={posts.count} setPage={setPage}/>
      </div>
    </div>
    )
}