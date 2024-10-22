"use client"

import { FC } from "react"

const Page: FC<{params: {slug:string} }> = ({params}) => {
  const { slug } = params;
  return (
    <div>Blog: {slug}</div>
  )
}

export default Page;