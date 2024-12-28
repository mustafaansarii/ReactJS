import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faGithub, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Brand icons

const ProfileLinkTree = () => {
  // Using FontAwesome icons for the links
  const links = [
    { icon: <FontAwesomeIcon icon={faGlobe} />, name: "Portfolio", url: "https://mustafaansarii.web.app/" },
    { icon: <FontAwesomeIcon icon={faLinkedin} />, name: "LinkedIn", url: "https://www.linkedin.com/in/mustafaansaari/" },
    {
      icon: <img src="https://img.icons8.com/?size=100&id=O4SEeX66BY8o&format=png&color=000000" alt="CodeChef" className="w-6 h-6" />,
      name: "CodeChef", 
      url: "https://www.codechef.com/users/Mustafaansari"
    },
    {
      icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png" alt="Codeforces" className="w-6 h-6" />,
      name: "Codeforces", 
      url: "https://codeforces.com/profile/mustafaansari"
    },
    {
      icon: <img src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png" alt="LeetCode" className="w-6 h-6" />,
      name: "LeetCode", 
      url: "https://leetcode.com/mustafaansari/"
    },
    {
      icon: <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GeeksForGeeks" className="w-6 h-6" />,
      name: "GeeksForGeeks", 
      url: "https://www.geeksforgeeks.org/user/mustafaansrii/"
    },
    { icon: <FontAwesomeIcon icon={faGithub} />, name: "GitHub", url: "https://github.com/mustafaansarii" },
    { icon: <FontAwesomeIcon icon={faTelegram} />, name: "X (Twitter)", url: "https://twitter.com/Mustafaansaarii" },
    { icon: <FontAwesomeIcon icon={faEnvelope} />, name: "Email", url: "mailto:your-email@example.com" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[580px] max-h-screen rounded-xl shadow-lg p-6 dark:text-gray-50 overflow-y-auto scrollbar-hide">
 
        <div className="text-center">
          <img
            src="https://ugc.production.linktr.ee/4e8c870d-923a-44f5-8eec-f5fa354ab22b_anime.jpeg?io=true&size=avatar-v3_0"
            alt="Profile"
            className="w-20 h-20 mx-auto rounded-full border-2 dark:border-gray-700"
          />
          <h1 className="text-xl font-semibold mt-4">connect with me:</h1>
          <p className="text-sm mt-2">
          Software developer, Machine learning enthusiast, Real World Problem Solver.
          </p>

          <div className="flex justify-center gap-4 mt-4">
            {links.slice(0, 9).map((link, index) => (
              <a key={index} href={link.url} className="text-2xl  hover:text-sky-400 ">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6">
          {links.slice(0, 8).map((link, index)  => (
            <a
              key={index}
              href={link.url}
              className="flex items-center justify-between rounded-lg p-4 mb-3 border hover:bg-slate-200 hover:text-black text-white border-gray-600 bg-gray-800 dark:hover:bg-gray-700"
            >
              <span className="flex items-center gap-4">
                <span className="text-2xl">{link.icon}</span>
                <span>{link.name}</span>
              </span>
              <span className="text-gray-400 text-lg">•••</span>
            </a>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ProfileLinkTree;
