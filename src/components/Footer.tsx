import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithubAlt, faLinkedinIn, faRedditAlien, faStrava } from "@fortawesome/free-brands-svg-icons";
import { faClock, faCube } from "@fortawesome/free-solid-svg-icons";

function SocialItem({ url, icon }: { url: string; icon: IconProp }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="icon" icon={icon} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer>
      <menu className="social">
        <SocialItem url="https://github.com/MrSpoony/" icon={faGithubAlt} />
        <SocialItem url="https://wakatime.com/@MrSpoony" icon={faClock} />
        <SocialItem
          url="https://www.linkedin.com/in/kimi-l%C3%B6ffel-782724235"
          icon={faLinkedinIn}
        />
        <SocialItem
          url="https://reddit.com/u/MrSpoony100"
          icon={faRedditAlien}
        />
        <SocialItem
          url="https://www.worldcubeassociation.org/persons/2021LOFF01"
          icon={faCube}
        />
        <SocialItem
          url="https://www.strava.com/athletes/53358468"
          icon={faStrava}
        />
      </menu>
      <menu className="important">
        <li>|</li>
        <li>
          <a href="#top">Home</a>
        </li>
        <li>|</li>
        <li>
          <a href="#about-me">About me</a>
        </li>
        <li>|</li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>|</li>
      </menu>
      <p className="copyright">Kimi Löffel © 2022</p>
    </footer>
  );
}
