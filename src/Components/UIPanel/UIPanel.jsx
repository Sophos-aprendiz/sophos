import useGetUserId from "../../hooks/useGetUserId";
import Block from "../Block/Block";
import Box from "../Box/Box";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";

const UIPanel = () => {
  const { accounts, loading: loadingInitial } = useGetUserId();
  if (loadingInitial) return <Spinner />;
  else
    return (
      <div>
        <Header email={accounts[0].username} />
        <Box />
        <Block />
      </div>
    );
};

export default UIPanel;
