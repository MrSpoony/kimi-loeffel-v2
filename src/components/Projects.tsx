import Project from "./Project";

export default function Projects() {
  return (
    <section className="projects" id="projects"
      onMouseMove={(e) => {
        const cards = document.querySelectorAll(".project");
        for (const [, card] of Object.entries(cards)) {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        }
      }}
    >
      <h2>Projects</h2>
      <div className="cards">
        {Array.from(Array(6)).map((el) => (
          <Project
            key={el}
            title="Cube"
            link="https://github.com/MrSpoony"
            image="/topics/rubiks-cube.png"
            description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi."
          />
        ))}
      </div>
    </section>
  )
}
