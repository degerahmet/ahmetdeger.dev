import React from 'react';
import type { GameState } from './useSnakeGame';
import Button from '../UI/Button';

interface GameOverlayProps {
  gameState: GameState;
  onStart: () => void;
  onReset: () => void;
}

export const GameOverlay: React.FC<GameOverlayProps> = ({ gameState, onStart, onReset }) => {
  if (gameState === 'playing') return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded">
      <div className="text-center">
        {gameState === 'start' && (
          <>
            <p className="text-[#607B96] mb-4">Press start or use arrow keys to begin</p>
            <Button variant="primary" onClick={onStart}>
              start-game
            </Button>
          </>
        )}
        {gameState === 'over' && (
          <div>
            <div className="text-[#E99287] text-xl mb-4">GAME OVER!</div>
            <Button variant="primary" onClick={onReset}>
              start-again
            </Button>
          </div>
        )}
        {gameState === 'won' && (
          <div>
            <div className="text-[#43D9AD] text-xl mb-4">WELL DONE!</div>
            <Button variant="primary" onClick={onReset}>
              play-again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameOverlay;