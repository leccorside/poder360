import { getAllPosts } from '@/lib/queries';
import { LatestPosts } from '../components/latest-posts';

// Não use "searchParams" diretamente
export default async function Page() {
  // Pegue os posts de forma estática, sem parâmetros de busca
  const { posts, pageInfo } = await getAllPosts('', '', { before: null, after: null });

  const latestPostProps = {
    posts,
    pageInfo,
    category: '',
    searchTerm: ''
  };

  return (
    <section className='mt-10'>
      <LatestPosts {...latestPostProps} />
    </section>
  );
}
