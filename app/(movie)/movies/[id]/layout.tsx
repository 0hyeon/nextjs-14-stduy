import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MovieVideos from "../../../../components/movie-videos";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  console.log(params);
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <ul>
        <li>
          <Link prefetch href={`/movies/${params.id}/movie`}>
            movie
          </Link>
        </li>
        <li>
          <Link href={`/movies/${params.id}/credit`}>credit</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
