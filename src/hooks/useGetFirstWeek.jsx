import axios from "axios";
import { useEffect, useState } from "react";

const useGetFirstWeek = () => {
  const [week, setWeek] = useState("");
  const [loading, setLoading] = useState(true);
  const tokken = window.localStorage.getItem("tokken");
  const userName = window.localStorage.getItem("user");

  const getFirstWeek = async () => {
    const urlG =
      "https://testapp.sophossolutions.com/SophosApiChronus/api/tt/ProjectTimeSheet/getFirstWeekByUserName";

    let params = {
      UserName: userName,
      WeekDate: "0",
      WeekRate: "0",
    };
    try {
      let headersG = {
        Authorization: "Bearer " + tokken,
      };

      let responseGetWeek = await axios.get(urlG, {
        headers: headersG,
        params,
      });

   
      let originalDate = responseGetWeek.data.data[0].fecha;
      
      console.log({originalDate})
      let dateObject = new Date(originalDate);

     
      dateObject.setDate(dateObject.getDate() - 0);

    
      let formattedDate = formatDate(dateObject);

      setWeek(formattedDate);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateWeek = (daysToAdd) => {
    if (week) {
      console.log({week})
      let newDate = new Date(week);
      console.log(newDate.getDate())
      newDate.setDate(newDate.getDate() + daysToAdd);
      console.log({daysToAdd})
      let formattedDate = formatDate(newDate);
      setWeek(formattedDate);
    }
  };
  console.log(week)
 

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(date);
  };
 

  useEffect(() => {
    getFirstWeek();
  }, []);

  return [week, loading, updateWeek];
};

export default useGetFirstWeek;
