import React from 'react';
import { Card } from 'react-bootstrap';

const cardStyle = {
  width: '18rem',
  margin: '1rem',
  border: '2px solid #eee',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const imageStyle = {
  height: '250px',
  objectFit: 'cover'
};

const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/250"
}) => {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
