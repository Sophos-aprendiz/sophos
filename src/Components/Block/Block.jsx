import "./Block.css";
import Info from "../Info/Info";
import Total from "../Total/Total";
import Input from "../Inputs/Input";
import logo from "../../assets/favi.png";
import { TimeSheet } from "../TimeSheet/TimeSheet";
import { useContext } from "react";
import { TimeSheetContext } from "../context";
import { Table } from "react-bootstrap";
import Spinner from "../Spinner/Spinner";
const Block = () => {
  const { setSection, loading } = useContext(TimeSheetContext);
  const handleOnChange = (event) => {
    const value = event.target.value;
    setSection(value);
  };

  return (
    <div className="div-block">
      <div className="block">
        {loading ? (
          <Spinner />
        ) : (
          <>
          <img className="logoChronus" src={logo}/>
            <Input handleOnChange={handleOnChange} />

            <Info />

            <TimeSheet />
          </>
        )}
      </div>
      <div className="blockTwo">
        <Table className="table-total" borderless>
          <thead className="title">
            <tr>
              <th> </th>
              <th>Concepto</th>
              <th></th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miercoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sabado</th>
              <th>Domingo</th>
              <th>Total</th>
            </tr>
          </thead>

          <Total />
        </Table>
      </div>
    </div>
  );
};

export default Block;
