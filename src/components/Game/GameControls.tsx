import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface GameControlsProps {
  foodCount: number;
}

const GameControls: React.FC<GameControlsProps> = ({ foodCount }) => {
  return (
    <div className="flex justify-between items-center text-[#607B96] mt-4">
      <div className="text-xs">
        // use keyboard
        <br />
        // arrows to play
      </div>
      <div className="flex flex-col items-center gap-1">
        <ArrowUp size={16} />
        <div className="flex gap-1">
          <ArrowLeft size={16} />
          <ArrowDown size={16} />
          <ArrowRight size={16} />
        </div>
      </div>
      <div className="text-xs">
        // food left
        <div className="flex gap-1 mt-1">
          {Array(5).fill(0).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < foodCount ? 'bg-[#43D9AD]' : 'bg-[#607B96]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameControls;