import { Toaster } from "react-hot-toast";
import useGetUserId from "../../hooks/useGetUserId";
import Block from "../Block/Block";
import Box from "../Box/Box";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";

import { useContext } from "react";
import { TimeSheetContext } from "../context";
const UIPanel = () => {
  const { accounts, loading: loadingInitial } = useGetUserId();

  const { week, loadinng, updateWeek } = useContext(TimeSheetContext);

  const handleWeekChange = (daysToAdd) => {
    console.log({ daysToAdd });
    updateWeek(daysToAdd);
  };

  console.log(week);

  if (loadingInitial) return <Spinner />;
  else
    return (
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Header email={accounts[0].username} />
        <Box
          week={week}
          loading={loadinng}
          handleWeekChange={(daysToAdd) => handleWeekChange(daysToAdd)}
        />
        <Block />
      </div>
    );
};

export default UIPanel;
