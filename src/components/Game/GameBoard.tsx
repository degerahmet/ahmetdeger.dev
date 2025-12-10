import React from 'react';
import type { Position } from './useSnakeGame';

interface GameBoardProps {
  snake: Position[];
  food: Position;
  gridSize: number;
  cellSize: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ snake, food, gridSize }) => {
  const getStyle = (x: number, y: number) => ({
    left: `${(x / gridSize) * 100}%`,
    top: `${(y / gridSize) * 100}%`,
    width: `${(1 / gridSize) * 100}%`,
    height: `${(1 / gridSize) * 100}%`,
  });

  return (
    <div
      className="relative bg-[#01080E] rounded border-2 border-[#1E2D3D] w-full h-full"
    >
      {snake.map((segment, i) => (
        <div
          key={`${segment.x}-${segment.y}-${i}`}
          className="absolute bg-[#43D9AD] transition-all duration-100"
          style={{
            ...getStyle(segment.x, segment.y),
            transform: 'scale(0.9)', // Small gap between cells
          }}
        />
      ))}
      <div
        className="absolute bg-[#FEA55F] transition-all duration-100"
        style={{
          ...getStyle(food.x, food.y),
          transform: 'scale(0.9)',
        }}
      />
    </div>
  );
};

export default GameBoard;