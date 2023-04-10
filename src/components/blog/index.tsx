import React from 'react'
import { BlogType } from '../../types'

type Props = {
    key: number;
    blog: BlogType
}

const BlogCard = ({key, blog}: Props) => {
  return (
    <article key={key} className="rounded-xl bg-white p-2 ring ring-blue-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:h-10 sm:w-10 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border sm:border-gray-700"
      aria-hidden="true"
    >
      <div>
        <i className="fa-solid text-2xl fa-feather text-gray-700"></i>
      </div>
    </div>

    <div>
      <h3 className="mt-2 text-lg font-normal sm:text-lg">
        <a href={`${blog.url}`} className="hover:underline"> {blog.title} </a>
      </h3>

      <p className="mt-1 text-sm text-gray-700">
        {blog.description}
      </p>
    </div>
  </div>
</article>
  )
}

export default BlogCard