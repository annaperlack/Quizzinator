import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // Use the theme object here ...
  return (
    <div style={{ backgroundColor: theme.background }}>
      This component uses the {theme.name} theme.
    </div>
  );
}

const Leaderboard = () => {
const {scores} = useScoreContext();
  
    return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {scores.map((score, index) => (
          <li key={index}>
            {score.name} - {score.score}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
