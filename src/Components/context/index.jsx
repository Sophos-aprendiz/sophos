import { createContext, useEffect, useState } from "react";
import { formatDate } from "../../utils/formatDate";
import axios from "axios";
import useGetFirstWeek from "../../hooks/useGetFirstWeek";
import { getTotal } from "../../utils/getTotal";

export const TimeSheetContext = createContext();
// eslint-disable-next-line react/prop-types
export const TimeSheetProvider = ({ children }) => {
  const [section, setSection] = useState("GetTimeEntries");
  const [proyecto, setProyecto] = useState("GetProjectsByUser"); // Estado inicial
  const [listaProyectos, setListaProyectos] = useState([]);

  const [week] = useGetFirstWeek();
  const [timeSheet, setTimeSheet] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectTimesheet, setSelectTimesheet] = useState([]);
  const [updateTimeSheet, setUpdtaTimeSheet] = useState(0);
  console.log(updateTimeSheet);
  const [total, setTotal] = useState([
    {
      name: "TOTAL HORAS - CLIENTE CARGABLE",
      hours: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
        total: 0,
      },
    },
    {
      name: "TOTAL HORAS - CLIENTE NO CARGABLE",
      hours: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
        total: 0,
      },
    },
    {
      name: "TOTAL HORAS - CLIENTE POR REQUERIMIENTOS CARGABLE",
      hours: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
        total: 0,
      },
    },
    {
      name: "TOTAL HORAS - CLIENTE POR REQUERIMIENTOS NO CARGABLE",
      hours: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
        total: 0,
      },
    },
    {
      name: "TOTAL HORAS - SOPHOS CARGABLE",
      hours: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
        total: 0,
      },
    },
    {
      name: "TOTAL HORAS - SOPHOS NO CARGABLE",
      hours: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
        total: 0,
      },
    },
    {
      name: "TOTAL HORAS - CONSOLIDADAS",
      hours: {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
        total: 0,
      },
    },
  ]);
  const options = [
    "GetTimeEntries",

    "GetTimeEntriesNC",

    "GetTimeEntriesReqC",

    "GetTimeEntriesReqNC",

    "GetTimeEntriesGsC",

    "GetTimeEntriesGsNC",
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
      let monday = 0;
      let wednesday = 0;
      let tuesday = 0;
      let sunday = 0;
      let saturday = 0;
      let thursday = 0;
      let friday = 0;
      let total = 0;
      for (let index = 0; index < options.length; index++) {
        let { data } = await getTimeSheet(options[index]);
        if (index == 0) setSelectTimesheet(data);
        let calcTotal = getTotal(data);
        monday += calcTotal.monday;
        wednesday += calcTotal.wednesday;
        tuesday += calcTotal.tuesday;
        sunday += calcTotal.sunday;
        saturday += calcTotal.saturday;
        thursday += calcTotal.thursday;
        friday += calcTotal.friday;
        total += calcTotal.total;
        setTotal((state) => {
          const copyState = [...state];
          copyState[index].hours = calcTotal;
          return copyState;
        });

        timeSheets[options[index]] = data;
      }

      let totalHours = {
        monday,
        wednesday,
        tuesday,
        sunday,
        saturday,
        thursday,
        friday,
        total,
      };
      setTotal((state) => {
        const copyState = [...state];
        copyState[6].hours = totalHours;
        return copyState;
      });
      setTimeSheet(timeSheets);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    switch (section) {
      case "GetTimeEntriesNC":
        setProyecto("GetProjectsNC");
        break;
      case "GetTimeEntriesReqC":
        setProyecto("GetProjectsReqC");
        break;
      case "GetTimeEntriesReqNC":
        setProyecto("GetProjectsReqNC");
        break;
      case "GetTimeEntriesGsC":
        setProyecto("GetAllProjectsC");
        break;
      case "GetTimeEntriesGsNC":
        setProyecto("GetAllProjectsNC");
        break;
      default:
        setProyecto("GetProjectsByUser");
        break;
    }
  }, [section]);

  useEffect(() => {
    if (week) getAllTimeSheets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [week, updateTimeSheet]);
  useEffect(() => {
    if (Object.keys(timeSheet).length) {
      setSelectTimesheet(timeSheet[section]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);
  return (
    <TimeSheetContext.Provider
      value={{
        timeSheet,
        selectTimesheet,
        loading,
        setSection,
        section,
        total,
        proyecto,
        setProyecto,
        listaProyectos,
        setListaProyectos,
        setUpdtaTimeSheet,
      }}
    >
      {children}
    </TimeSheetContext.Provider>
  );
};
