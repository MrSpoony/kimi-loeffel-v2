import Project from "./Project";

export default function Projects() {
return (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="cards">
      {Array.from(Array(6)).map((el) => (
        <Project
          key={el}
          title="Cube"
          image="/topics/rubiks-cube.png"
          description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi."
          onMouseMove={(e: MouseEvent) => {
            for (const card of document.getElementsbyClassName("project")) {
              const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
              card.style.setProperty("--mouse-x", `${x}px`)
              card.style.setProperty("--mouse-y", `${y}px`)
            }
          }}
        />
      ))}
    </div>
  </section>
)
}
