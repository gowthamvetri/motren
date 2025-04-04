import React from "react";
import { LineChart } from "@mui/x-charts";

function MotrenJourny() {
  return (
    <div className="bg-amber-100 px-2 py-1 rounded-2xl">
      <section className="text-sm">
        <h2 className="font-semibold">Motren</h2>
        <p>Journy of impact</p>
      </section>
      <section>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          height={170}
        />
      </section>
    </div>
  );
}

export default MotrenJourny;
