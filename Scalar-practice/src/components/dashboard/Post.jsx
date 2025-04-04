import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

function Post() {
  return (
    <div>
      <section className="flex text-xs gap-3 items-center">
        <div className="w-20">
            <img src="https://socialplanner.io/blog/wp-content/uploads/2020/06/Content-is-king-and-very-important-1024x538-1.jpg.webp" alt="" />
        </div>
        <div>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolores, modi ipsum illo .</div>
          <div className="flex justify-end">show more</div>
          <div className="flex gap-2">
            <BiSolidLike/>
            <BiSolidDislike/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Post;
