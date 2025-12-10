import React from 'react';

interface GameInfoProps {
    foodCount: number;
}

const GameInfo: React.FC<GameInfoProps> = ({ foodCount }) => {
    return (
        <div className="flex justify-between items-start text-[#607B96] mb-2 px-2">
            <div className="text-xs">
                // use keyboard
                <br />
                // or use arrow keys
            </div>
            <div className="text-xs text-right">
                // food left
                <br />
                // to win
                <div className="flex gap-1 mt-1 justify-end">
                    {Array(6).fill(0).map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i < foodCount ? 'bg-[#43D9AD]' : 'bg-[#607B96] opacity-30'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameInfo;
