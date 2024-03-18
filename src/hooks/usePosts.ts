import { useQuery, QueryClient, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

new QueryClient();
const fetcher = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return data;
};

export const usePosts = () => {
  const queryClient = useQueryClient();
  const { data, status } = useQuery({
    queryKey: ['posts'],
    queryFn: fetcher,
  });

  return {
    queryClient,
    data,
    status,
  };
};
