export default function Project({
  title,
  description,
  image,
  link
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <article className="project" >
      <a className="content" href={link}>
        <div className="image">
        <div className="img">
          <picture>
            <img src={image} alt={`Image of ${title}`} />
          </picture>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
    </article >
  );
}
