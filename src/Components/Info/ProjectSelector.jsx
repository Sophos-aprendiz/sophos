/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useContext, useEffect } from "react";
import { TimeSheetContext } from "../context/index";

const ProjectSelector = () => {
  const { proyecto, setListaProyectos, listaProyectos, setProyectId } =
    useContext(TimeSheetContext);

  const getProyectos = async () => {
    try {
      const authToken = window.localStorage.getItem("tokken");
      const userName = window.localStorage.getItem("user");
      const { data } = await axios.get(
        "https://testapp.sophossolutions.com/SophosApiChronus/api/tt/ProjectTimeSheet/Section1-getProjectsByUserAndSection",
        {
          params: {
            UserName: userName,
            Section: proyecto, // Usar la sección correspondiente al proyecto seleccionado
          },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setListaProyectos(data?.data ?? []);
    } catch (error) {
      console.error("Error al obtener proyectos:", error);
    }
  };
  useEffect(() => {
    getProyectos();
  }, [proyecto]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setProyectId(value);
  };

  return (
    <div className="label">
      <p>Codigo Proyecto:</p>
      <select onChange={handleOnChange} className="select">
        <option value="">Selecciona un proyecto</option>
        {listaProyectos.map((project) => (
          <option key={project.projectId} value={project.projectId}>
            {project.projectName}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ProjectSelector;
