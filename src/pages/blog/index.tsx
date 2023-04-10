import React from 'react'
import BlogCard from '../../components/blog'
import { blogInfo } from '../../portfolio'


const Blog = () => {
    const blogSectionStyle = "flex flex-col my-5 mb-16"
    const blogHeaderStyle = "text-4xl font-normal px-12 md:mx-20"
    const blogCardContainerStyle = "flex flex-row justify-center pt-5 grid md:grid-cols-3 gap-9 px-12 md:mx-20"
  return (
    <section className={blogSectionStyle} id="blogs">
        <div className="w-auto">
          <h1 className={blogHeaderStyle}>Blogs</h1>
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