import React from "react";
import ShadowCard from "./ShadowCard";
import "./PortfolioItem.scss";
import Tag from "./Tag";

const renderImageSection = imageSrc => (
  <div
    className="image-container"
    style={{
      background: `url(${imageSrc})`,
      backgroundSize: "cover",
      position: "relative"
    }}
  >
    <div className="dark-layer" />
  </div>
);

const PortfolioItem = ({
  title,
  description,
  tags,
  onClick,
  imageSrc,
  demoLink,
  githubLink,
  inverted
}) => {
  return (
    <ShadowCard className="PortfolioItem">
      {!inverted && renderImageSection(imageSrc)}

      <div className="content-container">
        <h2>{title}</h2>
        <p className="text-muted">{description}</p>
        <div className="tags-container">{tags.map(i => <Tag>{i}</Tag>)}</div>
        <div className="button-row">
          {githubLink && (
            <a href={githubLink} className="button button-pill" target="_blank">
              View on GitHub
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              className="button button-primary button-pill"
              target="_blank"
            >
              View Demo
            </a>
          )}
        </div>
      </div>

      {inverted && renderImageSection(imageSrc)}
    </ShadowCard>
  );
};

export default PortfolioItem;
