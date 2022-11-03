import { ReactNode, useEffect, useRef, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function Accordeon({
  title,
  image,
  progress,
  children,
}: {
  title: string;
  image: string;
  progress?: number;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const progressBar = useRef(null);
  let observer: IntersectionObserver | undefined = undefined;
  if (typeof window != typeof undefined) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.add("show");
        }
      });
    });
  }

  useEffect(() => {
    if (!progressBar?.current) return;
    if (!observer?.observe) return;
    observer.observe(progressBar.current);
  }, [observer, progressBar]);

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
            <div
              ref={progressBar}
              className={`bar progress-${Math.round(progress * 100)}`}
            ></div>
          </div>
        )}
      </a>
      {isOpen && (
        <>
          <div className="content">
            <div className="img">
              <picture>
                <img src={image} alt={`Image of a ${title}`} />
              </picture>
            </div>
            {children}
          </div>
        </>
      )}
    </div>
  );
}
