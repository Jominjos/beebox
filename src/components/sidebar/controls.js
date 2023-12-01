import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

import "../styles/controls.css";
export default function Controls() {
  return (
    <div className="controls">
      <div className="flex">
        <IoSettingsSharp size={20} color="white" />
        <h4>Settings</h4>
      </div>
      <div className="flex">
        <MdOutlineLogout size={20} color="white" />
        <h4>Logout</h4>
      </div>
    </div>
  );
}
