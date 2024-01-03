import { createContext, useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";
import useGetFirstWeek from "../../hooks/useGetFirstWeek";

export const TimeSheetContext = createContext();
// eslint-disable-next-line react/prop-types
export const TimeSheetProvider = ({ children }) => {
  const [section, setSection] = useState("GetTimeEntries");
  const [week] = useGetFirstWeek();
  const [timeSheet, setTimeSheet] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectTimesheet, setSelectTimesheet] = useState();
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
      const initialTimeSheet = [];
      await options.forEach(async (option, index) => {
        let timeSheet = await getTimeSheet(option.value);
        if (index == 0) setSelectTimesheet(timeSheet.data);
        timeSheets[option.value] = timeSheet.data;
      });
      setTimeSheet(timeSheets);
      setSelectTimesheet(initialTimeSheet);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(timeSheet);
  useEffect(() => {
    if (week) getAllTimeSheets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [week]);
  useEffect(() => {
    if (Object.keys(timeSheet).length) setSelectTimesheet(timeSheet[section]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);
  return (
    <TimeSheetContext.Provider
      value={{ timeSheet, selectTimesheet, loading, setSection, section }}
    >
      {children}
    </TimeSheetContext.Provider>
  );
};
