import { Toaster } from "react-hot-toast";
import useGetUserId from "../../hooks/useGetUserId";
import Block from "../Block/Block";
import Box from "../Box/Box";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import useGetFirstWeek from '../../hooks/useGetFirstWeek';
const UIPanel = () => {
  const { accounts, loading: loadingInitial } = useGetUserId();

  const [week,loading, updateWeek]=useGetFirstWeek()

  const handleWeekChange = (daysToAdd) => {
    console.log({daysToAdd})
    updateWeek(daysToAdd);
  };
  if (loadingInitial) return <Spinner />;
  else
    return (
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Header email={accounts[0].username} />
        <Box week= {week}  loading= {loading} handleWeekChange = { (daysToAdd)=> handleWeekChange (daysToAdd)} />
        <Block />
      </div>
    );
};

export default UIPanel;
