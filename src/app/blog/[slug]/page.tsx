import { getPostsBySlug, getAllPostSlugs } from '@/lib/queries';
import type { Metadata, ResolvingMetadata } from 'next';
import BackButton from '@/app/components/BackButton';
import Image from 'next/image';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostsBySlug((await params).slug);

  const previousImages = (await parent).openGraph?.images || [];
 
  return {
    title: post?.title,
    openGraph: {
      images: ['/open-graph.jpg', ...previousImages],
    },
  }
}

// Nova função adicionada para gerar parâmetros estáticos
export async function generateStaticParams() {
  const posts = await getAllPostSlugs(); // Substitua por sua função para obter todos os slugs

  return posts.map((post) => ({
    slug: post.slug, // Substitua pelo nome correto do atributo de slug
  }));
}

export default async function Page({ params }: {
  params: Promise<{ slug: string }>
}) {
  const post = await getPostsBySlug((await params).slug);
  if (!post) { return <div>Post não encontrado.</div> }

  const formattedDate = new Date(post.date);
  const date = formattedDate.toLocaleString('pt-BR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className='div-post-single'>
      <div className='btn-voltar'>
        <BackButton />
      </div>

      {post.featuredImage?.node?.sourceUrl && (
        <div className='img-single'>
          <Image 
            src={post.featuredImage.node.sourceUrl} 
            alt={post.title} 
            className="w-full h-auto"
            width={1920}
            height={1080}
            priority
          />
        </div>
      )}

      <div className='conteudo-single'>
        <div className='titulo-single'>
          <h1 className='font-bold text-3xl mb-4' dangerouslySetInnerHTML={{ __html: post.title }}></h1>
        </div>

        <div className='autor-data'>
          {Array.isArray(post.categories?.nodes) &&
            post.categories.nodes.map((category, index) => (
              <span key={category.id} className="cat-name-single">
                {category.name}
                {index < post.categories.nodes.length - 1 && ", "}
              </span>
          ))}
          Publicado em {date} por <b>{post?.author?.node?.name}</b>
        </div>

        <div className='article' dangerouslySetInnerHTML={{ __html: post?.content }} />
      </div>
    </div>
  );
}
