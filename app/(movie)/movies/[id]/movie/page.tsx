"use client";
import { Suspense } from "react";
import MovieVideos from "../../../../../components/movie-videos";
import { useParams } from "next/navigation";

export default function Movie() {
  const { id } = useParams();
  console.log(id);
  return (
    <Suspense fallback={<h1>Loading movie videos</h1>}>
      <MovieVideos id={String(id)} />
    </Suspense>
  );
}
