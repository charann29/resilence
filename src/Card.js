import React from 'react';
import './Card.css'; // Ensure you create this CSS file for styling

const Card = ({ company }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{company.name}</h3>
            </div>
            <div className="card-body">
                {company.url ? (
                    <a href={company.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                    </a>
                ) : (
                    <p>No website available</p>
                )}
            </div>
        </div>
    );
};

export default Card;
