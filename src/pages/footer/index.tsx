import React from 'react'
import { headLine } from '../../portfolio'



const Footer = () => {
  const link1 = "https://realonbebeto.github.io"
  const link2 = "https://realonbebeto.github.io"
  const email = "realonbebeto@gmail.com"
  return (
    <footer aria-label="Site Footer" className="mt-16">
  <div className="mx-auto max-w-5xl px-4 py-2 sm:px-6 lg:px-8 border-t-4 border-gray-100">

    <h1 className="mx-auto mt-12 text-center leading-relaxed text-gray-700 text-2xl font-semibold">
      {headLine.text}
    </h1>

    <nav aria-label="Footer Nav" className="mt-10">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#skills">
            Skills
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#experience">
            Work Experience
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#education">
            Education
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Open Source
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Achievements
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="#blogs">
            Blogs
          </a>
        </li>
      </ul>
    </nav>

    <ul className="m-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-[#0072b1]"
        >
          <span className="sr-only">LinkedIn</span>
          <i className="text-4xl fab fa-linkedin"></i>
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75"
        >
          <span className="sr-only">GitHub</span>
          <i className="text-4xl fab fa-brands fa-github"></i>
        </a>
      </li>

      <li>
        <a
          href="/"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-[#1DA1F2]"
        >
          <span className="sr-only">Twitter</span>
          <i className="text-4xl fa-brands fa-square-twitter"></i>
        </a>
      </li>
      <li>
        <a
          href={`mailto:${email}`}
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-[#3e65cf]"
        >
          <span className="sr-only">Email</span>
          <i className="text-4xl fa-sharp fa-solid fa-at"></i>
        </a>
      </li>
    </ul>
    <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-500">
      Theme by <span>
        <a href={`${link2}`} rel="noreferrer" target='_blank'>lee</a>
        </span> and <span>
        <a href={`${link1}`} rel="noreferrer" target='_blank'>realonbebeto</a>
        </span>
    </p>
  </div>
</footer>
  )
}

export default Footer