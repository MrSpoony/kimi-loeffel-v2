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
    <a className="project" href={link} target="_blank" rel="noreferrer">
      <div className="content">
        <div className="image">
          <div className="img">
            <picture>
              <img src={image} alt={`Image of a ${title}`} />
            </picture>
          </div>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a >
  );
}
