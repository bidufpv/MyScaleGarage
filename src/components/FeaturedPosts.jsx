import React from "react";
import { Link } from "react-router-dom";
import ImagekitIO from "./ImagekitIO";
// import Image from './Image'
function FeaturedPosts() {
  return (

    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* Main */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <ImagekitIO
          src="https://ik.imagekit.io/khqjdiqz7/image2.jpg"
          className="rounded-3xl object-cover h-auto w-auto"
        />

        {/*details*/}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-700 lg:text-lg">Autoart</Link>
          <span className="text-slate-800">2days ago</span>
        </div>

        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold "
        >
          1/18Models
        </Link>
      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">

        
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 flex items-center justify-center">
            <ImagekitIO
              src="https://ik.imagekit.io/khqjdiqz7/image1.JPG?updatedAt=1733030549866"
              className="rounded-3xl object-cover w-full h-auto"
              alt=""
            />
          </div>

          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-500">Full Review</Link>
              <span className="text-slate-400 text-sm">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lamborghini Murcilego
            </Link>
          </div>
        </div>

        

        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 flex items-center justify-center">
            <ImagekitIO
              src="https://ik.imagekit.io/khqjdiqz7/image3.jpg"
              className="rounded-3xl object-cover w-full h-auto"
              alt=""
            />
          </div>

          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-500">Full Review</Link>
              <span className="text-slate-400 text-sm">1 day ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Bugatti Veyron
            </Link>
          </div>
        </div>

        {/* fourth */}

        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 flex items-center justify-center">
            <ImagekitIO
              src="https://ik.imagekit.io/khqjdiqz7/image4.jpg?updatedAt=1733031004619"
              className="rounded-3xl object-cover w-full h-auto"
              alt=""
            />
          </div>

          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-500">Full Review</Link>
              <span className="text-slate-400 text-sm">4 days ago</span>
            </div>
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Mercedes Benz SLR Mclaren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
