import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faFile } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const { logo, title, description, link, linkText, link2, linkText2 } = props;

  return (
    <React.Fragment>
      <div className="project">
        <div className="project-container">
          <div className="project-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
          <div className="project-links">
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href={link}>
                      <div className="project-link">
                        <div className="project-link-icon">
                          <FontAwesomeIcon icon={faLink} />
                        </div>
                        <div className="project-link-text">{linkText}</div>
                      </div>
                    </a>
                  </td>
                  <td>
                    <a href={link2}>
                      <div className="project-link" style={{ marginLeft: '10px' }}>
                        <div className="project-link-icon">
                          <FontAwesomeIcon icon={faFile} />
                        </div>
                        <div className="project-link-text" style={{ marginTop: '2px' }}>{linkText2}</div>
                      </div>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
