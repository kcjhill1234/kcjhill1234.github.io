import React from "react";
import { Card, Image } from "semantic-ui-react";
const Project = (props) => {
  return (
    <Card href={props.link} target="_blank">
      <Image src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`} wrapped bordered ui={true} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.date}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>University of Utah coding BootCamp</Card.Content>
    </Card>
  );
};

export default Project;
