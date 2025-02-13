import React from "react";
import linkedinIcon from "/public/linkedin-box-fill.png";
import githubIcon from "/public/github-fill.png";
import mailIcon from "/public/mail-fill.png";

const Contact = () => {
  const contactLinks = [
    { email: "mailto:pavanvalmiki9959@gmail.com" },
    { github: "https://github.com/pavan369-d" },
    { instagram: "" },
    { linkedin: "https://linkedin.com/in/pavan-valmiki/" },
    { x: "" },
    { youtube: "" }
  ];

  // Map platform names to image icons
  const iconMap = {
    email: mailIcon,
    github: githubIcon,
    linkedin: linkedinIcon
  };

  return (
    <div id="contact">
      <ul>
        {contactLinks
          .map((link, index) => {
            const [platform, url] = Object.entries(link)[0];

            if (!url) return null; // Skip empty links

            return (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img className="link-icon"
                    src={iconMap[platform] || ""}
                    alt={`${platform} icon`}
                    style={{ width: "30px", height: "30px", marginRight: "10px" }}
                  />
                  
                </a>
              </li>
            );
          })
          .filter(Boolean)}
      </ul>
      <p>Created by V Pavan Kumar</p>
    </div>
  );
};

export default Contact;
