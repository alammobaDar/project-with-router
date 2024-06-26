import Button from "./Button";
import style from '../style/projectSidebar.module.css';

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <div className={style.sidebar}>
      <div className={style.titleLogo}>
        <h2 className={style.appTitle}>Cubellaborate</h2>
      </div>
      <div className={style.titleButtonDiv}>
        <p className={style.myWorkspace}>My Workspaces</p>
        <Button onClick={onStartAddProject}></Button>
      </div>
      <ul className={style.projectList}>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className={style.projectButton}
              onClick={() => onSelectProject(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="rounded-lg bg-gradient-to-tr from-gray-300 to-gray-500 shadow-lg shadow-[#a4a4a4,#ffffff]"></div>
    </div>
  );
}
