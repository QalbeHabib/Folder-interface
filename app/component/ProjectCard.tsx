import React, { ReactNode } from "react";
import FolderWrapper from "./FolderCardContainer";

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
      <div>
        <FolderWrapper />
      </div>
      <div>{flagContent}</div>
      <div>{description}</div>
    </div>
  );
};

export default ProjectCard;
