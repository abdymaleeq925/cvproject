import React from "react";
import { Link } from "react-router-dom";

import "../styles/project-summary.css";
import { useTranslation } from "react-i18next";

const ProjectSummary = ({ summaryText, summaryTags, itemObj }) => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="project-summary">
        <div className="container">
          <div className="project-summary__wrapper">
            <div className="project-summary__info">
              <h2 className="project-summary__info-title">{t('projectSummary')}</h2>
              <p className="project-summary__info-text">{summaryText.split('\n').map((line, i) => <p key={i}>{line}</p>)}</p>
              <div className="project-summary__info-tags">
                {summaryTags?.map((tag, index) => (
                  <div className="project-summary__info-tags-item" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="project-summary__details">
              <h2 className="project-summary__details-title">
                {t('projectDetails')}
              </h2>
              <div className="project-summary__details-content">
                {itemObj?.map((item, index) => (
                  <div
                    className="project-summary__details-content-item"
                    key={index}
                  >
                    <h4 className="project-summary__details-content-item-heading">
                      {item.scope}:{" "}
                    </h4>
                    <Link
                      to={item.link}
                      className="project-summary__details-content-item-link"
                      target="_blank"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSummary;
