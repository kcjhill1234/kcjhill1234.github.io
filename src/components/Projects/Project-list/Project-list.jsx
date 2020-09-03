import React from "react";
import { Card } from "semantic-ui-react";
import Project from "../Project/Project";

export default function ProjectList({ projects }) {
  const projectList = projects.map((project, i) => (
    <Project key={i} {...project} />
  ));
  return <Card.Group itemsPerRow={3}>{projectList}</Card.Group>;
}
