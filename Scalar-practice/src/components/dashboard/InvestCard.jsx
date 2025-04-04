import React from "react";
import Add from "./Add";

function InvestCard() {
  return (
    <section className="flex flex-col py-1 bg-amber-100 rounded-2xl">
      <div className="flex flex-col py-2 gap-1 justify-center items-center">
        <p className="text-sm">Turn your investment better tommorow</p>
        <p className="text-xs">with motron</p>
        <Add prompt={"Add fund"} />
        <p className="text-xs">Contribute funds for a positive change</p>
      </div>
    </section>
  );
}

export default InvestCard;
