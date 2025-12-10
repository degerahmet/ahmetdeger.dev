import { useState, useCallback, useEffect } from 'react';

export type Position = { x: number; y: number };
export type Direction = { x: number; y: number };
export type GameState = 'start' | 'playing' | 'over' | 'won';

const GRID_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_FOOD = { x: 3, y: 3 };
const INITIAL_DIRECTION = { x: 0, y: 0 };
const GAME_SPEED = 200;

export const useSnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [gameState, setGameState] = useState<GameState>('start');
  const [lastDirection, setLastDirection] = useState<Direction>(INITIAL_DIRECTION);

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setLastDirection(INITIAL_DIRECTION);
    setGameState('start');
  }, []);

  const handleStart = useCallback(() => {
    setGameState('playing');
    setDirection({ x: 1, y: 0 }); // Start moving right
  }, []);

  const checkCollision = useCallback((head: Position): boolean => {
    // Check wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    // Check self collision (excluding the tail which will move)
    return snake.slice(0, -1).some(segment => segment.x === head.x && segment.y === head.y);
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (gameState !== 'playing') return;

    setSnake(prevSnake => {
      const newHead = {
        x: prevSnake[0].x + direction.x,
        y: prevSnake[0].y + direction.y,
      };

      if (checkCollision(newHead)) {
        setGameState('over');
        return prevSnake;
      }

      // Check for food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(generateFood());
        // Check win condition
        // Win after eating 5 foods
        if (prevSnake.length >= 5) {
          setGameState('won');
          return prevSnake;
        }
        return [newHead, ...prevSnake];
      }

      return [newHead, ...prevSnake.slice(0, -1)];
    });

    setLastDirection(direction);
  }, [direction, food, gameState, generateFood, checkCollision]);

  const handleDirectionChange = useCallback((newDirection: Direction) => {
    if (gameState === 'start') {
      setGameState('playing');
    }

    // Prevent 180-degree turns
    if (
      (lastDirection.x !== 0 && newDirection.x === -lastDirection.x) ||
      (lastDirection.y !== 0 && newDirection.y === -lastDirection.y)
    ) {
      return;
    }

    setDirection(newDirection);
  }, [gameState, lastDirection]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState === 'start') {
        handleStart();
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
          handleDirectionChange({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          handleDirectionChange({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          handleDirectionChange({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          handleDirectionChange({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleDirectionChange, gameState, handleStart]);

  useEffect(() => {
    if (gameState === 'playing') {
      const gameLoop = setInterval(moveSnake, GAME_SPEED);
      return () => clearInterval(gameLoop);
    }
  }, [moveSnake, gameState]);

  return {
    snake,
    food,
    gameState,
    resetGame,
    handleStart,
    handleDirectionChange,
    GRID_SIZE,
  };
};