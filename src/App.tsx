import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Posts from './components/Posts';
import { useState } from 'react';
import Post from './components/Post';

const queryClient = new QueryClient();
function App() {
  const [postId, setPostId] = useState(-1);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {postId > -1 ? <Post postId={postId}  setPostId={setPostId}/>:<Posts setPostId={setPostId}/>}
      </QueryClientProvider>
    </>
  );
}

export default App;
