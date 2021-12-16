import React, { useState } from "react";
import "./quickAccess.css";

const QuickAcess = () => {
  const [select, setSelect] = useState("fa-th-large");
  return (
    <div className="quickAccessWrapper">
      <div className="quickAcessMenuBlock">
        <div className="quickAccessActions">+Add Activity</div>
        <div className="quickAcessMenuOptionsBlock">
          {" "}
          <div
            className={`quickAccessMenuOption   ${
              select === "fa-th-large" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("fa-th-large");
            }}
          >
            <i class="fas fa-th-large"></i>
          </div>
          <div
            className={`quickAccessMenuOption   ${
              select === "fa-leaf" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("fa-leaf");
            }}
          >
            <i class="fas fa-leaf"></i>
          </div>
          <div
            className={`quickAccessMenuOption   ${
              select === "fa-microchip" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("fa-microchip");
            }}
          >
            <i class="fas fa-microchip"></i>
          </div>
          <div
            className={`quickAccessMenuOption   ${
              select === "fa-globe-americas" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("fa-globe-americas");
            }}
          >
            <i class="fas fa-globe-americas"></i>
          </div>
          <div
            className={`quickAccessMenuOption   ${
              select === "fa-cog" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("fa-cog");
            }}
          >
            <i class="fas fa-cog"></i>
          </div>
          <div
            className={`quickAccessMenuOption   ${
              select === "fa-puzzle-piece" ? "selected " : ""
            } `}
            onClick={() => {
              setSelect("fa-puzzle-piece");
            }}
          >
            <i class="fas fa-puzzle-piece"></i>
          </div>
        </div>
        <div className="quickAccessActions">Ask SANA</div>
      </div>
      <div className="quickAccessActionsMobile">SANA</div>
    </div>
  );
};

export default QuickAcess;
