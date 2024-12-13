import 'nes.css/css/nes.min.css';
import '../styles/RetroTitle.css';

const RetroTitle = ({ children }) => {
    return (
        <div className="retro-container">
            <div className="background-words"></div>
            <h1 className="retro-title">GamerBud</h1>
            <div className="retro-content">{children}</div>
        </div>
    );
};

export default RetroTitle;