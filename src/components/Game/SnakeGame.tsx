import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnakeGame } from './useSnakeGame';
import GameBoard from './GameBoard';
import GameControls from './GameControls';
import GameOverlay from './GameOverlay';

const CELL_SIZE = 20;

export const SnakeGame: React.FC = () => {
  const navigate = useNavigate();
  const { snake, food, gameState, resetGame, handleStart, handleDirectionChange, GRID_SIZE } = useSnakeGame();

  const handleLevelUp = () => {
    navigate('/about');
  };

  return (
    <div className="bg-[#011627] rounded-lg p-6 w-full max-w-[400px] mx-auto shadow-xl border border-[#1E2D3D]">
      <div className="relative w-full aspect-square">
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
          onLevelUp={handleLevelUp}
        />
      </div>
      <GameControls
        foodCount={snake.length}
        onDirectionChange={handleDirectionChange}
      />
    </div>
  );
};

export default SnakeGame;