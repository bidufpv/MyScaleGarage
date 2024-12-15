import React from "react";
import { Link } from "react-router-dom";
import Categories from "../Categories";
import FeaturedPosts from "../FeaturedPosts";
import PostList from "../PostList";

export function Home() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Model Reviews and Articles</span>
      </div>

      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="max-w-2xl px-4 md:px-8 lg:px-12">
          <h1 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-bold">
            Porsche Carrera GT
          </h1>
          <p className="mt-8 text-sm items-center md:text-base text-justify">
            The Porsche Carrera GT (Project Code 980) is a mid-engine sports car
            that was manufactured by German automobile manufacturer Porsche from
            2004 to 2006. Sports Car International named the Carrera GT number
            one on its list of Top Sports Cars of the 2000s, and number eight on
            its Top Sports Cars of All Time list. For its advanced technology
            and development of its chassis, Popular Science magazine awarded it
            the "Best of What's New" award in 2003.
          </p>
        </div>

        {/* animated button */}
        <Link to="write" className="hidden md:block">
  <div
    className="absolute top-[120px] right-[80px] transform translate-x-0"
  >
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      className="text-lg tracking-widest w-40 h-40 animate-spin animatedButton"
    >
      <path
        id="circlePath"
        fill="none"
        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
      />
      <text className="text-xs md:text-lg">
        <textPath href="#circlePath" startOffset="0%">
          Write about your model Cars •
        </textPath>
        <textPath href="#circlePath" startOffset="60%">
          Share your story •
        </textPath>
      </text>
    </svg>
    <button
      className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <line x1="6" y1="18" x2="18" y2="6" />
        <polyline points="9 6 18 6 18 15" />
      </svg>
    </button>
  </div>
</Link>

      </div>


      {/* Categories */}
      <Categories/>

      {/* featured posts */}
      <FeaturedPosts/>

      {/* PostList */}
       <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
       <PostList/>
    </div>

  );
}
