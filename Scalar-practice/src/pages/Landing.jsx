import React from "react";
import Dot from "../components/common/Dot";
import Button from "../components/landing/Button";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { BsFillPlusCircleFill } from "react-icons/bs";

function Landing() {
  return (
    <div className="w-full px-5 py-3">
      <section className="flex flex-col items-center py-10">
        <div><h1>Freelancing for change</h1></div>
        <div><h1 className="tracking-widest text-2xl">Develope <Dot color={"blue"}/> Conterbute <Dot color={"blue"}/> an Impact </h1></div>
      </section>
      <section className="flex flex-col items-center gap-6">
        <div className=""><h1>Want to be a part of Motren?</h1></div>
        <div className="flex gap-20">
          <Button icon={<HiMiniRocketLaunch/>} content={"Accelerate"} color={"blue-400"}/>
          <Button icon={<BsFillPlusCircleFill/>} content={"Commit"} color={"blue-500"}/>
        </div>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

export default Landing;
