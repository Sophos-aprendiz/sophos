/* eslint-disable react/prop-types */
import { TimeSheet } from "../TimeSheet/TimeSheet";
import "./Line.css";

const Line = () => {
  return (
    <div className="block-line">
      <div className="lineOne"></div>
      <div className="lineTwo"></div>
      <div className="lineThree">
        <TimeSheet />
      </div>
    </div>
  );
};

export default Line;
