import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ project, onReadMore }) => {
  return (
    <Card className="h-100 shadow-sm border-0 project-card">
      <div className="img-container">
        <Card.Img variant="top" src={project.image} alt={project.title} className="card-img" />
      </div>
      <Card.Body>
        <Card.Title className="fw-bold">{project.title}</Card.Title>
        <Card.Text className="text-muted">
          {project.description.slice(0, 100)}...
        </Card.Text>
        <Button variant="outline-primary" size="sm" onClick={() => onReadMore(project)}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
