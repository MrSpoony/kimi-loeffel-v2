export default function Project({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article
      className="project"
      onMouseMove={(e) => {
        const cards = document.querySelectorAll(".project");
        for (const [, card] of Object.entries(cards)) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          (card as any).style.setProperty("--mouse-x", `${x}px`);
          (card as any).style.setProperty("--mouse-y", `${y}px`);
        }
      }}
    >
      <div className="content">
        <div className="img">
          <picture>
            <img src={image} alt={`Image of ${title}`} />
          </picture>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
