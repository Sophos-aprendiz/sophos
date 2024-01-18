import "./Block.css";
import Info from "../Info/Info";
import Total from "../Total/Total";
import Input from "../Inputs/Input";
import { TimeSheet } from "../TimeSheet/TimeSheet";
import { useContext } from "react";
import { TimeSheetContext } from "../context";
const Block = () => {
  const { setSection } = useContext(TimeSheetContext);
  const handleOnChange = (event) => {
    const value = event.target.value;
    setSection(value);
  };

  return (
    <div className="div-block">
      <div className="block">
        <Input handleOnChange={handleOnChange} />

        <Info />

        <TimeSheet />
      </div>
      <div className="blockTwo">
      
        <div className="title">
          <div className="concept"> Concepto </div>
          <div className="results">
            <p>|</p>
            <p>Lunes</p>
            <p>|</p>
            <p>Martes</p>
            <p>|</p>
            <p>Miercoles</p>
            <p>|</p>
            <p>Jueves</p>
            <p>|</p>
            <p>Viernes</p>
            <p>|</p>
            <p>Sabado</p>
            <p>|</p>
            <p>Domingo</p>
            <p>|</p>
            <p>Total</p>
            <p>|</p>
          </div>
        </div>
        <Total />
      </div>
    </div>
  );
};

export default Block;
