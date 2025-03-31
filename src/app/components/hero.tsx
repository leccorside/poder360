import { Post } from '@/lib/types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type LatestPostsProps = {
  posts: Post[];
  title?: string;
  searchTerm?: string;
  pageInfo?: { startCursor: string | null, endCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean };
  category?: string;
}

export function Hero({ posts }: LatestPostsProps){
  return (
    <div className="mb-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-[300px] md:h-[400px]"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div
              className="relative flex items-center justify-center w-full h-full bg-cover bg-center text-white"
              style={{
                backgroundImage: `url(${post.featuredImage?.node.sourceUrl || "/default.jpg"})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <h1 className="relative z-10 text-xl md:text-2xl font-bold text-center p-4">
                {post.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}