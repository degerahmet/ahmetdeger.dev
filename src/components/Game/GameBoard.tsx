import React from 'react';
import type { Position } from './useSnakeGame';

interface GameBoardProps {
  snake: Position[];
  food: Position;
  gridSize: number;
  cellSize: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ snake, food, gridSize, cellSize }) => {
  return (
    <div
      className="relative bg-[#01080E] rounded border-2 border-[#1E2D3D]"
      style={{
        width: gridSize * cellSize,
        height: gridSize * cellSize,
      }}
    >
      {snake.map((segment, i) => (
        <div
          key={`${segment.x}-${segment.y}-${i}`}
          className="absolute bg-[#43D9AD]"
          style={{
            width: cellSize - 2,
            height: cellSize - 2,
            left: segment.x * cellSize,
            top: segment.y * cellSize,
          }}
        />
      ))}
      <div
        className="absolute bg-[#FEA55F]"
        style={{
          width: cellSize - 2,
          height: cellSize - 2,
          left: food.x * cellSize,
          top: food.y * cellSize,
        }}
      />
    </div>
  );
};

export default GameBoard;