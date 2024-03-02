"use client";
import { Suspense } from "react";
import { useParams } from "next/navigation";
import MovieCredit from "../../../../../components/movie-credit";

export default function Movie() {
  const { id } = useParams();
  console.log(id);
  return (
    <Suspense fallback={<h1>Loading movie credit</h1>}>
      <MovieCredit id={String(id)} />
    </Suspense>
  );
}
