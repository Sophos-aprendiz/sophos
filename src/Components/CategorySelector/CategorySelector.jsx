/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { TimeSheetContext } from "../context";
import axios from "axios";

const CategorySelector = () => {
  const { proyectId, category, setCategoryId } = useContext(TimeSheetContext);
  const [listCategories, setListCategories] = useState([]);
  const getCategories = async () => {
    try {
      const authToken = window.localStorage.getItem("tokken");
      const userName = window.localStorage.getItem("user");
      const { data } = await axios.get(
        "https://testapp.sophossolutions.com/SophosApiChronus/api/tt/ProjectTimeSheet/Section1-getCategoriesByUserAndSection",
        {
          params: {
            UserName: userName,
            Section: category,
            ProjectId: proyectId,
          },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setListCategories(data?.data ?? []);
    } catch (error) {
      console.error("Error al obtener categorias:", error);
    }
  };
  const handleOnChange = (e) => {
    const { value } = e.target;
    setCategoryId(value);
  };
  useEffect(() => {
    getCategories();
  }, [category, proyectId]);

  return (
    <select onChange={handleOnChange} className="select">
      {listCategories.length ? (
        listCategories.map((category, index) => (
          <option value={category.categoryId} key={index}>
            {category.categoryName}
          </option>
        ))
      ) : (
        <option>No hay Categorias</option>
      )}
    </select>
  );
};

export default CategorySelector;
