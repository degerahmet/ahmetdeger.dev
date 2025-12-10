import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface GameControlsProps {
  onDirectionChange: (dir: { x: number; y: number }) => void;
}

const GameControls: React.FC<GameControlsProps> = ({ onDirectionChange }) => {
  const buttonClass = "p-3 bg-[#011627] border border-[#1E2D3D] rounded-lg hover:bg-[#1E2D3D] transition-all active:scale-95 shadow-md flex items-center justify-center text-[#607B96] hover:text-white";

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <button
        onClick={() => onDirectionChange({ x: 0, y: -1 })}
        className={buttonClass}
        aria-label="Up"
      >
        <ArrowUp size={24} />
      </button>
      <div className="flex gap-2">
        <button
          onClick={() => onDirectionChange({ x: -1, y: 0 })}
          className={buttonClass}
          aria-label="Left"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={() => onDirectionChange({ x: 0, y: 1 })}
          className={buttonClass}
          aria-label="Down"
        >
          <ArrowDown size={24} />
        </button>
        <button
          onClick={() => onDirectionChange({ x: 1, y: 0 })}
          className={buttonClass}
          aria-label="Right"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default GameControls;