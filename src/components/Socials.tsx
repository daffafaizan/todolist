import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import Title from "./Title";
import AnimatedComponents from "./AnimatedComponents";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/daffafaizan",
  },
  {
    id: 2,
    icon: <FiTwitter />,
    url: "https://twitter.com/yeikSPAD",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/daffa-muhammad-faizan/",
  },
  {
    id: 4,
    icon: <FiInstagram />,
    url: "https://www.instagram.com/daffaizan",
  },
];

function Socials() {
  return (
    <AnimatedComponents>
      <div id="socials" className="container mx-auto">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <Title>Follow my socials</Title>
          <ul className="flex gap-12 md:gap-10 sm:gap-8 xxs:gap-6 xxxs:gap-4">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-cyan-600 dark:text-stone-900 hover:text-stone-200 dark:hover:text-cyan-600 cursor-pointer rounded-xl bg-gray-50 dark:bg-[#F4F5F0] hover:bg-cyan-600 dark:hover:bg-stone-800 shadow-sm p-8 xxxs:p-6 hover:scale-110 duration-300"
              >
                <i className="text-3xl sm:text-xl md:text-2xl xxs:text-xl xxxs:text-xl">
                  {link.icon}
                </i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedComponents>
  );
}

export default Socials;
