import { usePosts } from '../hooks/usePosts';

const Posts = ({
  setPostId,
}: {
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data, status, queryClient } = usePosts();
  // const cachePost = queryClient.getQueryData(['posts'])
  return (
    <div>
      <h1>投稿一覧</h1>
      <div>
        {status === 'pending' ? (
          <>読み込み中...</>
        ) : (
          <>
            {data.map((post: any) => (
              <p key={post.id}>
                <a
                  href="#"
                  onClick={() => setPostId(post.id)}
                  style={
                    queryClient.getQueriesData(['posts',post.id])
                      ? { fontWeight: 'bold', color: 'green' }
                      : {}
                  }
                >
                  {post.title}
                </a>
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;
