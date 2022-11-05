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
        <Project
          title="dotfiles"
          link="https://github.com/MrSpoony/dotfiles"
          image="/projects/dotfiles.png"
          description="My dotfiles which represent the configurations on almost all machines I use."
        />
        <Project
          title="worktime"
          link="https://github.com/MrSpoony/dotfiles"
          image="/projects/clock.png"
          description="worktime is a CLI application which can be used to calculate the worktime at a given day"
        />
        <Project
          title="soicode.vim"
          link="https://github.com/MrSpoony/soicode.vim"
          image="/topics/soi.png"
          description="soicode.vim is a port of the soicode VS-Code plugin for vim. You can use it to run testcases and see if they pass or fail."
        />
        <Project
          title="grader"
          link="https://github.com/MrSpoony/grader"
          image="/topics/soi.png"
          description="the grader is my own attempt at a grading system where you can upload your code to a CP problem and it validates your outputs."
        />
        <Project
          title="grade-tracker"
          link="https://github.com/MrSpoony/grade-tracker"
          image="/projects/grade.png"
          description="the grade-tracker is a program we created to track our grades in school"
        />
        <Project
          title="dadjoke-dcBot"
          link="https://github.com/MrSpoony/dadjoke-dcBot"
          image="/projects/dadjoke.png"
          description="this discord bot can be used to get random jokes and to get a joke on every midnight."
        />
      </div>
    </section>
  )
}
