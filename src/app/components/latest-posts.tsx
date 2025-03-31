import { SearchBar } from "./search-bar";
import { Post } from '@/lib/types';
import Link from "next/link";

type LatestPostsProps = {
  posts: Post[];
  title?: string;
  searchTerm?: string;
  pageInfo?: { startCursor: string | null, endCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean };
  category?: string;
}

// Função para limitar o número de caracteres
const limitExcerpt = (text: string, maxLength: number) => {
  if (!text) return text;
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

export function LatestPosts({ posts, searchTerm, pageInfo, category }: LatestPostsProps) {
  if (posts?.length === 0) {
    return <div>Nenhum post encontrado.</div>;
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        <h2 className="text-xl mb-4">Últimas postagens</h2>
        <div>
          <SearchBar />
        </div>
      </div>

      {/* Adicionando grid responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="py-4 flex justify-between hover:bg-slate-50"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 card-min">
              {post.featuredImage?.node?.sourceUrl && (
                <div className="">
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>
              )}

              {/* Exibindo a categoria */}
              <div className="text-gray-600 cat-min">
                  {post.categories.nodes.map((category, index) => (
                    <span key={category.id}>
                      {category.name}
                      {index < post.categories.nodes.length - 1 && ", "} {/* Separando categorias com vírgula */}
                    </span>
                  ))}
              </div>

              <div className="p-5">
                <a href={`/blog/${post.slug}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white titulo-post-min">
                    <div dangerouslySetInnerHTML={{ __html: post.title }}></div>
                  </h5>
                </a>

                <div
                  className="text-gray-500 mb-3 font-normal dark:text-gray-400 text-exc"
                  dangerouslySetInnerHTML={{ __html: limitExcerpt(post.excerpt, 150) }}
                />

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Leia mais
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-between mt-2">
        <div className="paginacao">
          {pageInfo?.hasPreviousPage && (
            <Link
              href={{
                pathname: "/",
                query: {
                  before: pageInfo.startCursor,
                  ...((searchTerm || category) && { searchTerm, category }),
                },
              }}
            >
              Anterior
            </Link>
          )}
        </div>

        <div className="paginacao">
          {pageInfo?.hasNextPage && (
            <Link
              href={{
                pathname: "/",
                query: {
                  after: pageInfo.endCursor,
                  ...((searchTerm || category) && { searchTerm, category }),
                },
              }}
            >
              Próximo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
