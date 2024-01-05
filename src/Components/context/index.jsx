import { createContext, useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";
import useGetFirstWeek from "../../hooks/useGetFirstWeek";
import { getTotal } from "../../utils/getTotal";

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
            DataFilter: "2023-12-25",
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
  let GetTimeEntries = getTotal(timeSheet["GetTimeEntries"]);

  let GetTimeEntriesNC = getTotal(timeSheet["GetTimeEntriesNC"]);

  let GetTimeEntriesReqC = getTotal(timeSheet["GetTimeEntriesReqC"]);

  let GetTimeEntriesReqNC = getTotal(timeSheet["GetTimeEntriesReqNC"]);

  let GetTimeEntriesGsC = getTotal(timeSheet["GetTimeEntriesGsC"]);

  let GetTimeEntriesGsNC = getTotal(timeSheet["GetTimeEntriesGsNC"]);

  let totalHours = getTotal([
    GetTimeEntries,
    GetTimeEntriesNC,
    GetTimeEntriesReqC,
    GetTimeEntriesReqNC,
    GetTimeEntriesGsC,
    GetTimeEntriesGsNC,
  ]);

  let total = [
    {
      name: "TOTAL HORAS - CLIENTE NO CARGABLE",
      hours: GetTimeEntries,
    },
    {
      name: "TOTAL HORAS - CLIENTE NO CARGABLE",
      hours: GetTimeEntriesNC,
    },
    {
      name: "TOTAL HORAS - CLIENTE POR REQUERIMIENTOS CARGABLE",
      hours: GetTimeEntriesReqC,
    },
    {
      name: "TOTAL HORAS - CLIENTE POR REQUERIMIENTOS NO CARGABLE",
      hours: GetTimeEntriesReqNC,
    },
    {
      name: "TOTAL HORAS - SOPHOS NO CARGABLE",
      hours: GetTimeEntriesGsC,
    },
    {
      name: "TOTAL HORAS - SOPHOS CARGABLE",
      hours: GetTimeEntriesGsNC,
    },
    {
      name: "TOTAL HORAS - CONSOLIDADAS",
      hours: totalHours,
    },
  ];
  console.log(total);
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
      console.log(timeSheets["GetTimeEntries"]);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (week) getAllTimeSheets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [week]);
  useEffect(() => {
    if (Object.keys(timeSheet).length) {
      setSelectTimesheet(timeSheet[section]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);
  useEffect(()=>{

  },[timeSheet])
  return (
    <TimeSheetContext.Provider
      value={{
        timeSheet,
        selectTimesheet,
        loading,
        setSection,
        section,
        total,
      }}
    >
      {children}
    </TimeSheetContext.Provider>
  );
};
