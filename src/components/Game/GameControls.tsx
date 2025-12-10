import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface GameControlsProps {
  foodCount: number;
  onDirectionChange: (dir: { x: number; y: number }) => void;
}

const GameControls: React.FC<GameControlsProps> = ({ foodCount, onDirectionChange }) => {
  return (
    <div className="flex justify-between items-center text-[#607B96] mt-4">
      <div className="text-xs">
        // use keyboard
        <br />
        // or use arrow keys
      </div>
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={() => onDirectionChange({ x: 0, y: -1 })}
          className="p-2 hover:text-white hover:bg-[#1E2D3D] rounded transition-colors"
          aria-label="Up"
        >
          <ArrowUp size={20} />
        </button>
        <div className="flex gap-1">
          <button
            onClick={() => onDirectionChange({ x: -1, y: 0 })}
            className="p-2 hover:text-white hover:bg-[#1E2D3D] rounded transition-colors"
            aria-label="Left"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => onDirectionChange({ x: 0, y: 1 })}
            className="p-2 hover:text-white hover:bg-[#1E2D3D] rounded transition-colors"
            aria-label="Down"
          >
            <ArrowDown size={20} />
          </button>
          <button
            onClick={() => onDirectionChange({ x: 1, y: 0 })}
            className="p-2 hover:text-white hover:bg-[#1E2D3D] rounded transition-colors"
            aria-label="Right"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="text-xs">
        // food left
        <br />
        // to win
        <div className="flex gap-1 mt-1">
          {Array(6).fill(0).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i < foodCount ? 'bg-[#43D9AD]' : 'bg-[#607B96]'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameControls;