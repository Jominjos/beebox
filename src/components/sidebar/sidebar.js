import React from "react";
import "../styles/sidebar.css";
import Favorites from "./favorites";
import Logo from "./logo";
import Downloads from "./downloads";
import Controls from "./controls";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div id="side-flex">
        <Logo />
        <Favorites />
        <Downloads />
        <Controls />
      </div>
    </div>
  );
}
