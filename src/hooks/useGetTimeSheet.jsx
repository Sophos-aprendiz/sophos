  import axios from "axios";
  import { useEffect, useState } from "react";
  import useGetFirstWeek from "./useGetFirstWeek";
  import { formatDate } from "../utils/formatDate";

  const useGetTimeSheet = () => {
    const [week] = useGetFirstWeek();
    const [timeSheet, setTimeSheet] = useState({});
    const [loading, setLoading] = useState(true);
    const options = [
      {
        value: "GetTimeEntries",
      },
      {
        value: "GetTimeEntriesNC",
      },
      {
        value: "GetTimeEntriesReqC",
      },
      {
        value: "GetTimeEntriesReqNC",
      },
      {
        value: "GetTimeEntriesGsC",
      },
      {
        value: "GetTimeEntriesGsNC",
      },
    ];
    const getTimeSheet = async (section) => {
      setLoading(true);
      try {
        const authToken = window.localStorage.getItem("tokken");
        const userName = window.localStorage.getItem("user");
        const { data } = await axios.get(
          "https://testapp.sophossolutions.com/SophosApiChronus/api/tt/ProjectTimeSheet/Section1-getTimeSheetsByUserAndSection",
          {
            params: {
              UserName: userName,
              Section: section,
              DataFilter: formatDate(week),
            },
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        return data;
      } catch (error) {
        console.log(error);
      }
    };
    const getAllTimeSheets = async () => {
      try {
        const timeSheets = {};
        await options.forEach(async (option) => {
          let timeSheet = await getTimeSheet(option.value);

          timeSheets[option.value] = timeSheet.data;
        });
        setTimeSheet(timeSheets);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      if (week) getAllTimeSheets();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [week]);
    return { timeSheet, loading };
  };

  export default useGetTimeSheet;
