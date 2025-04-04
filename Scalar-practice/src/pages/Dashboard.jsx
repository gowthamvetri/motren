import React from "react";
import Profile from "../components/dashboard/Profile";
import UnlockedBadg from "../components/dashboard/UnlockedBadg";
import InvestCard from "../components/dashboard/InvestCard";
import Activity from "../components/dashboard/Activity";
import MotrenCard from "../components/dashboard/MotrenCard";
import RecentWork from "../components/dashboard/RecentWork";
import MotrenJourny from "../components/dashboard/MotrenJourny";
import ProjectEvent from "../components/dashboard/ProjectEvent";

function Dashboard() {
  return (
    <>
      <div className="grid grid-flow-row gap-5 p-8">
        <div className="grid grid-flow-col grid-cols-3 gap-5">
          <div>
            <Profile />
          </div>
          <div className="flex flex-col gap-5">
            <UnlockedBadg />
            <InvestCard />
            <Activity />
          </div>
          <div className="flex flex-col gap-5">
            <MotrenCard />
            <MotrenJourny />
            <RecentWork />
          </div>
        </div>
        <div>
          <ProjectEvent/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
