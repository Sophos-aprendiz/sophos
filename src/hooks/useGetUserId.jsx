/* eslint-disable react-hooks/exhaustive-deps */
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import { useEffect, useState } from "react";
import useSetTokken from "./useSetTokken";
const useGetUserId = () => {
  const { accounts, inProgress } = useMsal();
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [tokken, loadingTokken] = useSetTokken("");

  const authToken = window.localStorage.getItem("tokken");

  const getUserId = async () => {
    try {
      let user;

      if (accounts.length > 0) {
        const email = accounts[0].username;
        user = email.split("@")[0];

        window.localStorage.setItem("user", user);
      }

      var config = {
        method: "get",
        url: `https://testapp.sophossolutions.com/SophosApiChronus/api/dbo/User/GetUserdIdbyUsername?userName=${user}`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      if (tokken) {
        const { data } = await axios(config);
        console.log(data);
        const id = data.data.userId;
        setUserId(id);
        window.localStorage.setItem("userId", id);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserId();
  }, [loadingTokken, inProgress, tokken]);

  return {
    userId,
    loading,
    accounts,
  };
};
export default useGetUserId;
