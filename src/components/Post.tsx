import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



const Post = ({
  postId,
  setPostId,
}: {
  postId: number;
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { data, status } = useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return data;
    },
    enabled: !!postId,
  });
  return (
    <div>
      <div></div>
      {status === 'pending' ? (
        <>読み込み中</>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <a href="#" onClick={() => setPostId(-1)}>
            ホームに戻る
          </a>
        </>
      )}
    </div>
  );
};

export default Post;
