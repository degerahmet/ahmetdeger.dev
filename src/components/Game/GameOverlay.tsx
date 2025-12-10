import React from 'react';
import type { GameState } from './useSnakeGame';
import Button from '../UI/Button';

interface GameOverlayProps {
  gameState: GameState;
  onStart: () => void;
  onReset: () => void;
  onLevelUp?: () => void;
}

export const GameOverlay: React.FC<GameOverlayProps> = ({ gameState, onStart, onReset, onLevelUp }) => {
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
          <div className="flex flex-col gap-4">
            <div className="text-[#43D9AD] text-xl">WELL DONE!</div>
            <div className="flex items-center gap-4">
              <Button variant="default" onClick={onReset}>
                play-again
              </Button>
              <Button variant="primary" onClick={onLevelUp}>
                level-up
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameOverlay;