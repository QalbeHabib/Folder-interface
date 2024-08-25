import React, { ReactNode } from "react";

interface ProjectCardProps {
  image: string;
  flagContent: ReactNode;
  description: ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  flagContent,
  description,
}) => {
  return (
    <div>
      {/* <SvgWrapper>s</SvgWrapper> */}
      <div className="post-card__param">{flagContent}</div>
      <div className="post-card__title-link w-inline-block">{description}</div>
    </div>
  );
};

export default ProjectCard;
