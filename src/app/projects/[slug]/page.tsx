"use client"

import { FC } from "react"

const Page: FC<{params: {slug:string} }> = ({params}) => {
  const { slug } = params;
  return (
    <div>Projects: {slug}</div>
  )
}

export default Page;