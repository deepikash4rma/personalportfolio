const Projects = () => {
  const projects = [
    { id: 1, name: "Interactive Exhibit", description: "A dynamic display of multimedia" },
    { id: 2, name: "Virtual Archive", description: "Digitized documents and ancient texts" },
    { id: 3, name: "Generative Art", description: "AI-assisted art generated in real-time" }
  ];

  return (
    <div className="content-frame">
      <h2 style={{ marginBottom: "1rem" }}>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => alert(`Exploring: ${project.name}`)}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;