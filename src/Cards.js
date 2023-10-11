import React from 'react';
import './Cards.css';

export default function Cards() {
    return (
        <div className="cards-container">
            <div className="card">
                <h2>Card 1</h2>
                <p>This is the content for card 1.</p>
            </div>
            <div className="card">
                <h2>Card 2</h2>
                <p>This is the content for card 2.</p>
            </div>
            <div className="card">
                <h2>Card 3</h2>
                <p>This is the content for card 3.</p>
            </div>
        </div>
    );
}
