import React from "react";
import ComboBox from "./combobox";
import "../styles/header.css";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="header">
      <div className="searches d-flex">
        <ComboBox />
        <ComboBox />
        <ComboBox />
        <div className="d-flex">
          <div>
            <CgProfile size={60} color="white" />
          </div>
        </div>
      </div>
      <div className="d-flex-col">
        <IoIosNotifications size={30} color="white" />
        <FaMessage size={20} color="white" />
      </div>
    </div>
  );
}
