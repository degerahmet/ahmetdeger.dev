import React from 'react';
import { useSnakeGame } from './useSnakeGame';
import GameBoard from './GameBoard';
import GameControls from './GameControls';
import GameOverlay from './GameOverlay';

const CELL_SIZE = 20;

export const SnakeGame: React.FC = () => {
  const { snake, food, gameState, resetGame, handleStart, GRID_SIZE } = useSnakeGame();

  return (
    <div className="bg-[#011627] rounded-lg p-6 w-[400px]">
      <div className="relative">
        <GameBoard
          snake={snake}
          food={food}
          gridSize={GRID_SIZE}
          cellSize={CELL_SIZE}
        />
        <GameOverlay
          gameState={gameState}
          onStart={handleStart}
          onReset={resetGame}
        />
      </div>
      <GameControls foodCount={snake.length} />
    </div>
  );
};

export default SnakeGame;