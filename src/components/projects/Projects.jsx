import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Proje 1",
    image:
      "https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badges: ["React", "Node.js"],
  },
  {
    id: 2,
    title: "Proje 2",
    image:
      "https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badges: ["React", "Node.js"],
  },
  
  {
    id: 3,
    title: "Proje 3",
    image:
      "https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    badges: ["React", "Node.js"],
  },

];

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h1 className={styles.title}>Projeler</h1>
      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project.id} className={styles.project}>
            <img src={project.image} alt={project.title} />
            <div className={styles.projectContent}>
              <div className={styles.badges}>
                {project.badges.map((badge) => (
                  <span key={badge} className={styles.badge}>
                    {badge}
                  </span>
                ))}
              </div>
              <h2>{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
