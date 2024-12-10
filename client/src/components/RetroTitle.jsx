import React from 'react';
import 'nes.css/css/nes.min.css';
import '../styles/RetroTitle.css';

// const words = [
//     "High Score",
//     "Power Up",
//     "Game Over",
//     "Fatality",
//     "Get Powned",
//     "Level Up",
//     "Finish Him",
// ];

const RetroTitle = ({ children }) => {
    return (
        <div className="retro-container">
            <div className="background-words">
                {/* {words.map((word, index) => (
                    <span
                        key={index}
                        className="word"
                        style={{
                            top: `${Math.random() * 35 + 10}%`,
                            animationDuration: `${60 + Math.random() * 5}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    >
                        {word}
                    </span>
                ))} */}
            </div>
            <h1 className="retro-title">GamerBud</h1>
            <div className="retro-content">{children}</div>
        </div>
    );
};

export default RetroTitle;