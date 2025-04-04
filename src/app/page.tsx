import { getAllPosts, getCategories } from '@/lib/queries';
import { LatestPosts } from './components/latest-posts';
import { Categories } from './components/categories';

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 
export default async function Home(props: {
  params: Params
  searchParams: SearchParams
}) {

  const categories = await getCategories();
  const searchParams = await props.searchParams;
  const searchTerm = typeof searchParams.search === 'string' ? searchParams.search : '';
  const category = typeof searchParams.categories === 'string' ? searchParams.categories : '';
  const before = searchParams.before as string || null;
  const after = searchParams.after as string || null;

  // Get All Pots
  const { posts, pageInfo } = await getAllPosts(searchTerm, category, {before, after});
  
  const latestPostProps = {
    posts,
    pageInfo,
    category,
    searchTerm
  }

  return (
    <section className='mt-10'>
      <Categories categories={categories} />
      <LatestPosts {...latestPostProps} />
    </section>
  )
}