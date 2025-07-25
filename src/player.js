// src/Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />
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

// Default Props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: "N/A",
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150?text=No+Image", // Placeholder image
};

// Prop Types for validation
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default Player;