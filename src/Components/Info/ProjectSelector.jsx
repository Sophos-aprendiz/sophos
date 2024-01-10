import  { useEffect, useState } from "react";
import axios from "axios";

const ProjectSelector = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const tokken = window.localStorage.getItem("tokken");
        const userName = window.localStorage.getItem("user");

        const response = await axios.get(
          `https://testapp.sophossolutions.com/SophosApiChronus/api/tt/ProjectTimeSheet/Section1-getProjectsByUserAndSection?UserName=${userName}&section=GetProjectsByUser`,
          {
            params: {
              userName: userName,
              section: "GetProjectsByUser" 
            },
            headers: {
              Authorization: `Bearer ${tokken}`,
            },
          }
        );

        setProjects(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <select className='select'>
      <option value="">Select a Project</option>
      {projects.map((project) => (
        <option key={project.projectId} value={project.projectId}>
          {project.projectName}
        </option>
      ))}
    </select>
  );
};

export default ProjectSelector;