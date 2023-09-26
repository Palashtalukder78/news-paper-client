import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { image_url, title, details } = news;
    return (
      <Card>
        <Card.Img variant="top" src={image_url} className="img-fluid" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link>
            <Button variant="primary">See more News </Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default News;