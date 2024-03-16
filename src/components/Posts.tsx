import { useQuery, QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const queyClient = new QueryClient();

const Posts = ({
  setPostId,
}: {
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data, status } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return data;
    },
  });
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
                    queyClient.getQueriesData(['post',post.id])
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
