import React from "react";
import ImagekitIO from "../ImagekitIO";
import { Link } from "react-router-dom";

export function Addpost() {
  return (
    <div className="flex flex-col gap-10">
      {/* detail */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            1:18 AUTOart Veyron Comparison Review
          </h1>

          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span> Written By: </span>
            <Link className="text-blue-800">Bidu Nayak</Link>
            <span>on</span>
            <Link className="text-blue-800">Autoart</Link>
            <span>3 days ago</span>
          </div>

          <p className="text-slate-800 font-medium text-justify ">
            Once in a while comes along a special model that makes even the most
            seasoned collector giddy. The latest release from AUTOart, the
            Bugatti EB Veyron 16.4 Sang Noir, does exactly that to me. It has
            been years in the making, a rumored model from AUTOart for as long
            as I can remember, is finally available for you and me. This is a
            Signature series model from AUTOart and rightfully so. The exterior
            box is typical AUTOart/Bugatti – completely blue with the Bugatti
            logo in full colour on the face side. Model is also numbered and
            comes with a certificate of authenticity. The first AUTOart Veyron I
            bought was the blue/black production version, late last year. It
            revolutionized my diecast collection, initiating me with bugging
            eyes into the wonderful world of premium models. Before that, I had
            collected only budgets. Since then, I've purchased mostly AUTOart
            and Kyosho (Minichamps makes few of the supercars I collect). The
            Veyron has long been the centerpiece of my collection, rarely
            displaced from its spot on the top shelf of one of my Detolf
            cabinets, and then only temporarily, for a new acquisition to enjoy
            a day or two in the spotlight before the novelty wears off and the
            Veyron resumes its rightful place. The Veyron seems to be the teflon
            supercar. It's fat as a pig, and its performance on Top Gear's track
            was disappointing. It has been surpassed by the SSC Ultimate Aero TT
            as the fastest car on the planet.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <ImagekitIO
            className="rounded-2xl absolute bottom-20 overflow-auto aspect-auto" width={550} height={400}
            src="https://ik.imagekit.io/khqjdiqz7/bug.jpg?updatedAt=1733591817104"
          />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Intro */}
        <div className="text-slate-800 flex flex-col gap-6 text-justify">
          <p>
            Both models have very lustrous, bold paint, free from orange peel,
            blobbing, and underspray. I prefer the yellow color, myself: it's a
            bumblebee or the world's fastest taxi! But the paint used on the
            blue/black version is remarkable. If you squint hard, you'll see the
            tiny metallic flakes -- not just in the blue, but even in the black,
            which is actually a very dark blue/purple color. I think the
            production Veyron may have the best paint of any car in my
            collection.
          </p>
        </div>
        {/* Hero */}
        <div className="p-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">

          </div>
        </div>
      </div>
    </div>
  );
}
