import React from "react";
import Map from "../../images/map.jpg";
import "./fieldInfo.css";

const FieldInfo = () => {
  return (
    <div className="fieldInfoWrapper">
      <div className="fieldInfoBlock">
        <div className="mapInfoBlock">
          <img src={Map} alt="Field Map" className="fieldMapImg" />
          <div className="fieldMapInfoBlock">
            <div className="fieldIdBlock">
              <div className="fieldId">Field 1</div>
              <div className="dropDownIcon">
                <i class="fas fa-sort-down"></i>
              </div>
            </div>
            <div className="fieldLatLongBlock">
              <div className="fieldLat">Lat:</div>
              <div className="fieldLong">Long:</div>
            </div>
          </div>
        </div>
        <div className="fieldInfoDetailsBlock">
          <div className="fieldInfoDetails">
            <div className="fieldInfoDetailsHeading">Field Info</div>
            <div className="fieldinfoDetail">Crop:--</div>
            <div className="fieldinfoDetail">Stage:--</div>
            <div className="fieldinfoDetail">Soil Health: 86%</div>
          </div>
          <div className="fieldInchargeDetailsBlock">
            <div className="fieldInfoDetailsHeading">Field Incharge</div>
            <div className="inchargeCirclesBlock">
              <div className="inchargeCircle1"></div>
              <div className="inchargeCircle2"></div>
              <div className="inchargeCircle3"></div>
              <div className="inchargeCircle4"></div>
              <div className="inchargeCircle5">+</div>
            </div>
            <div className="manageBtn">MANAGE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldInfo;
