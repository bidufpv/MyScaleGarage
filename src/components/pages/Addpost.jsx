import React from "react";
import ImagekitIO from "../ImagekitIO";
import { Link } from "react-router-dom";
import AddPostMenuAction from "../AddPostMenuAction";
import Search from "../Search";

export function Addpost() {
  return (
    <div className="container mx-auto p-6 flex flex-col gap-10 lg:flex-row lg:gap-16">
      {/* Main Content */}
      <div className="flex-1 space-y-8">
        {/* Post Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          1:18 AUTOart Veyron Comparison Review
        </h1>

        {/* Post Meta */}
        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <span>Written By:</span>
          <Link className="text-blue-600 hover:underline">Bidu Nayak</Link>
          <span>on</span>
          <Link className="text-blue-600 hover:underline">Autoart</Link>
          <span>3 days ago</span>
        </div>

        {/* Post Content */}
        <p className="text-gray-700 leading-relaxed">
          Once in a while comes along a special model that makes even the most
          seasoned collector giddy. The latest release from AUTOart, the Bugatti
          EB Veyron 16.4 Sang Noir, does exactly that to me. It has been years
          in the making, a rumored model from AUTOart for as long as I can
          remember, is finally available for you and me. This is a Signature
          seasoned collector giddy. The latest release from AUTOart, the Bugatti
          EB Veyron 16.4 Sang Noir, does exactly that to me. It has been years
          in the making, a rumored model from AUTOart for as long as I can
          remember, is finally available for you and me. This is a Signature
          seasoned collector giddy. The latest release from AUTOart, the Bugatti
          EB Veyron 16.4 Sang Noir, does exactly that to me. It has been years
          in the making, a rumored model from AUTOart for as long as I can
          remember, is finally available for you and me. This is a Signature
          series model from AUTOart and rightfully so...
        </p>

        {/* Hero Image */}
        <div className="hidden lg:block">
          <ImagekitIO
            className="rounded-lg shadow-lg"
            width={550}
            height={400}
            src="https://ik.imagekit.io/khqjdiqz7/bug.jpg?updatedAt=1733591817104"
            alt="Bugatti Veyron"
          />
        </div>

        {/* Additional Content */}
        <div className="space-y-4">
          <p className="text-gray-700">
            Both models have very lustrous, bold paint, free from orange peel,
            blobbing, and underspray. I prefer the yellow color, myself: it's a
            bumblebee or the world's fastest taxi! But the paint used on the
            blue/black version is remarkable, I'm not a huge Veyron fan either.
            I like the shape of most of my other cars better. But it is an
            undeniably great car, like the Countach or F40 or McLaren F1. A
            history-maker. I got the concept Veyron used without a box, and the
            seller failed to mention the missing badge. I consider myself damned
            lucky not to have lost more parts: the mirrors survived intact
            despite the model being mummified in bubble wrap for shipping. (This
            was apparently a display model in a Romanian diecast shop, and they
            claim that they threw the box out like morons after some sort of
            photoshoot.) I have contacted AUTOart about my blue Veyron's badge,
            and if they send me only one replacement, I'll have to think long
            I like the shape of most of my other cars better. But it is an
            undeniably great car, like the Countach or F40 or McLaren F1. A
            history-maker. I got the concept Veyron used without a box, and the
            seller failed to mention the missing badge. I consider myself damned
            lucky not to have lost more parts: the mirrors survived intact
            despite the model being mummified in bubble wrap for shipping. (This
            was apparently a display model in a Romanian diecast shop, and they
            claim that they threw the box out like morons after some sort of
            photoshoot.) I have contacted AUTOart about my blue Veyron's badge,
            and if they send me only one replacement, I'll have to think long
            I like the shape of most of my other cars better. But it is an
            undeniably great car, like the Countach or F40 or McLaren F1. A
            history-maker. I got the concept Veyron used without a box, and the
            seller failed to mention the missing badge. I consider myself damned
            lucky not to have lost more parts: the mirrors survived intact
            despite the model being mummified in bubble wrap for shipping. (This
            was apparently a display model in a Romanian diecast shop, and they
            claim that they threw the box out like morons after some sort of
            photoshoot.) I have contacted AUTOart about my blue Veyron's badge,
            and if they send me only one replacement, I'll have to think long
            and hard about whether it should go on the butt of the yellow one
            instead. (I sent another email asking them to send me two, but I
            don't know if they'll do that.) The luggage is one cute little
            briefcase or small suitcase with nicely chromed handle hinges. But
            no, it is not removable. Alas.
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 space-y-8">
        {/* Author Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Author</h2>
          <div className="flex items-center gap-4">
            <ImagekitIO
              src="https://ik.imagekit.io/khqjdiqz7/github%20profile.jpeg?updatedAt=1733773964393"
              className="w-16 h-16 rounded-full object-cover"
              width={64}
              height={64}
              alt="Author"
            />
            <div>
              <Link className="text-blue-600 hover:underline font-medium">
                Bidu Nayak
              </Link>
              <p className="text-gray-600 text-sm mt-1">
                I am a model car collector since childhood and mostly collect
                1/18 and 1/64 scales.
              </p>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <Link>
              <ImagekitIO
                src="https://ik.imagekit.io/khqjdiqz7/fb.webp?updatedAt=1734097571610"
                width={24}
                height={24}
                alt="Facebook"
              />
            </Link>
            <Link>
              <ImagekitIO
                src="https://ik.imagekit.io/khqjdiqz7/ins.webp?updatedAt=1734097680176"
                width={24}
                height={24}
                alt="Instagram"
              />
            </Link>
          </div>
          <AddPostMenuAction />
        </div>
        <h1>Categories</h1>

        {/* Categories Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-blue-600">
            <li>
              <Link className="hover:underline">All</Link>
            </li>
            <li>
              <Link className="hover:underline">Reviews</Link>
            </li>
            <li>
              <Link className="hover:underline">Scale</Link>
            </li>
            <li>
              <Link className="hover:underline">Resin vs Metal</Link>
            </li>
            <li>
              <Link className="hover:underline">Price Range</Link>
            </li>
            <li>
              <Link className="hover:underline">Sources</Link>
            </li>
          </ul>
        </div>

        {/* Search Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Search</h2>
          <Search />
        </div>
      </aside>
    </div>
  );
}
