import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}
// async function getMovie(id: string) {
//   console.log(`Fetching movies : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }
// async function getVideo(id: string) {
//   console.log(`Fetching videos : ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}/videos`);
//   return response.json();
// }

export default async function MovieDetailPage({ params: { id } }: IParams) {
  console.log("================================");
  console.log("start fetching");

  //동기처리 : 하나씩처리
  // const movie = await getMovie(id);
  // const videos = await getVideo(id);

  //병렬처리 : 둘다완료돼야실행
  // const [movie, videos] = await Promise.all([getMovie(id), getVideo(id)]);
  console.log("end fetching");

  //병렬로 실행해서 즉시사용하려면 Suspense를 써야

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
