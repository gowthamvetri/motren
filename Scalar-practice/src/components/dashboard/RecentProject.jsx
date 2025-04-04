import React from "react";
import DynamicDemo from "./ProgressBar";
import { ProgressBar } from "primereact/progressbar";
import BasicDemo from "./ProgressBar";
import Example from "./ProgressBar";
import JoinBtn from "./JoinBtn";

function Project() {
  return (
    <div className="bg-amber-300 rounded-2xl overflow-hidden ">
      <section className="flex items-center justify-between py-2 rounded-2xl px-3">
        <div className="">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-sm font-bold">Project Name</h1>
            </div>
            <div >
              <div className="flex items-center gap-1 text-xs"><div className="w-2 h-2 bg-blue-500 inline-block rounded-full"></div> {"working"}</div>
            </div>
          </div>
          <div className="text-xs font-semibold"><p>{"expires In "} <span>2 days</span></p></div>
        </div>
        <div className="flex gap-8">
            <JoinBtn/>
            <button>&gt;</button>
        </div>
        
      </section>
      <Example/>
    </div>
  );
}

export default Project;
