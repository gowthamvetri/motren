import React from "react";
import { RiCoinLine } from "react-icons/ri";

function Points() {
  const lst = [
    {
      point: 1,
      mission: "Completing daily login",
      time: "12th march 2025",
    },
    {
      point: 10,
      mission: "Completing daily task",
      time: "12th march 2025",
    },
    {
      point: 1,
      mission: "Completing daily task",
      time: "20th march 2025",
    },
    {
      point: 1,
      mission: "Completing daily task",
      time: "21th march 2025",
    },
  ];
  return (
    <div className="px-8 py-10 flex flex-col gap-10 bg-amber-100 rounded-2xl">
      <section>
        <div>My Point Activity</div>
        <div className="flex flex-col gap-4 mt-4">
          {lst.map((ele) => (
            <div className="flex items-center justify-between bg-amber-50 px-4 py-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <RiCoinLine className="text-yellow-400"/>
                <div>+{ele.point}</div>
                <div>
                  <p>{ele.mission}</p>
                </div>
              </div>
              <div>
                <p>{ele.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Points;
