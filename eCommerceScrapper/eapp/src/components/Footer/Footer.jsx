import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom"


const FooterComponent = () => {
  return (
    <footer className="w-full bg-slate-950 tLinkxt-gray-400 py-2">
      <div className="container mx-auto flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:justify-between">
        <div className="w-[125px]">Webwise</div>
        <p>&copy; 2024 Webwise. All rights reserved.</p>

        <div className="flex flex-col lg:flex-row items-center space-x-4 mb-8 lg:mb-0">
          <p className="mb-6 lg:mb-0 text-lg font-semibold">Legal</p>
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-[14px] font-medium">
            <li className="mb-2 lg:mb-0">
              <Link
                href="/privacy-policy"
                className="text-white hover:text-gray-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2 lg:mb-0">
              <Link
                href="/cookie-policy"
                className="text-white hover:text-gray-300"
              >
                Cookie Policy
              </Link>
            </li>
            <li className="mb-2 lg:mb-0">
              <Link href="/disclaimer" className="text-white hover:text-gray-300">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/mrigangka2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/mrigangka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://twitter.com/mrigangkadatta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
