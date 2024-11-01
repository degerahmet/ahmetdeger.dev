"use client"

import MovieApp from "@/components/MovieApp/MovieApp";
import { FC } from "react"

const Page: FC<{params: {slug:string} }> = ({params}) => {
  const { slug } = params;
  switch (slug) {
    case "movie-suggestion":
      return <MovieApp />;
    default:
      return <div>404</div>;
}}

export default Page;
