import { ReactNode, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Accordeon({
  title,
  image,
  icon,
  progress,
  children,
}: {
  title: string;
  image?: string;
  icon?: IconProp;
  progress?: number;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordeon">
      <a className="open-close" onClick={() => setIsOpen(!isOpen)}>
        <div className="first-part">
          <MdOutlineArrowBackIosNew
            className={`icon icon-${isOpen ? "close" : "open"}`}
          />
          <h4 className="inlineTitle">{title}</h4>
        </div>
        {progress && (
          <div className="full-bar">
            <div className={`bar progress-${Math.round(progress * 100)}`}></div>
          </div>
        )}
      </a>
      {isOpen && (
        <>
          <div className="content">
            {image == null ? (
              icon != null && <FontAwesomeIcon className="img" icon={icon} />
            ) : (
              <div className="img">
                <picture>
                  <img src={image} alt={`Image of a ${title}`} />
                </picture>
              </div>
            )}
            {children}
          </div>
        </>
      )}
    </div>
  );
}
