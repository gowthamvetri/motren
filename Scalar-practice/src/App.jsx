import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Landing from "./pages/Landing.jsx";
import Rout from "./Rout.jsx";
import UserProfileEdit from "./pages/UserProfileEdit.jsx";
import BasicInfo from "./components/profileEdit/BasicInfo.jsx";
import Points from "./components/profileEdit/Points.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  const rout = (
    <Router>
      <Routes>
        <Route path="/" element={<Rout/>}>
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
          <Route path="/profile-edit" element={<UserProfileEdit/>}>
            <Route path="" element={<BasicInfo/>}/>
            <Route path="points" element={<Points/>}/>
          </Route>
          <Route path="/contactUs" element={<ContactUs/>}/>
        </Route>
      </Routes>
    </Router>
  );

  return <>{rout}</>;
}

export default App;
