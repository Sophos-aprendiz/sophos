import { useContext } from "react";
import useGetUserId from "../../hooks/useGetUserId";
import Block from "../Block/Block";
import Box from "../Box/Box";
import Date from "../Date/Date";
import Desc from "../Descriptions/Desc";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Input from "../Inputs/input";
import Line from "../Lines/Line";
import Spinner from "../Spinner/Spinner";
import { TimeSheetContext } from "../context";

const UIPanel = () => {
  const { accounts, loading: loadingInitial } = useGetUserId();
  const { setSection } = useContext(TimeSheetContext);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setSection(value);
  };

  if (loadingInitial) return <Spinner />;
  else
    return (
      <div>
        <Header email={accounts[0].username} />
        <Box />
        <Date />
        <Block />
        <Line />
        <Input handleOnChange={handleOnChange} />
        <Desc />
        <Info />
      </div>
    );
};

export default UIPanel;
