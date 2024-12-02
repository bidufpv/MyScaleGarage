import React from "react";
import ImagekitIO from "./ImagekitIO";
import { Link } from "react-router-dom";

function ListItems() {
  return (
    <div className="flex flex-col xl:flex-row gap-8 items-center">
      {/* Image */}
      <div className="xl:w-1/3">
        <ImagekitIO
          src="https://ik.imagekit.io/khqjdiqz7/ferrari.jpg?updatedAt=1733068226778"
          className="rounded-2xl object-cover w-full h-auto"
          alt="Ferrari 458 Italia"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Model Cars spec features pricepoint details
        </Link>
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>Written By</span>
          <Link className="text-blue-700">Bidu Nayak</Link>
          <span>on</span>
          <Link className="text-blue-700">Scale Explained</Link>
          <span>5 days ago</span>
        </div>
        <p className="text-justify">
          The Ferrari 458 Italia (Type F142) is an Italian mid-engine sports car
          produced by Ferrari. The 458 is the successor of the F430 and was
          first officially unveiled at the 2009 Frankfurt Motor Show. It was
          succeeded by the 488 GTB (Gran Turismo Berlinetta) in 2015.
        </p>
        <Link to="/test" className="text-blue-700 underline text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default ListItems;

