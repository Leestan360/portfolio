import React from 'react'
import BlogCard from '../../components/blog'
import { blogInfo } from '../../portfolio'


const Blog = () => {
    const blogSectionStyle = "flex flex-col my-24"
    const blogHeaderStyle = "text-2xl font-light text-[#1DA1F2]"
    const blogCardContainerStyle = "flex flex-row justify-center pt-5 grid md:grid-cols-3 gap-9"
  return (
    <section className={blogSectionStyle} id="musings">
        <div className="w-auto">
          <h1 className={blogHeaderStyle}>MUSINGS</h1>
        </div>
      <div className={blogCardContainerStyle}>
          {blogInfo.blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog}/>
          ))}
        </div>
    </section>
  )
}

export default Blog