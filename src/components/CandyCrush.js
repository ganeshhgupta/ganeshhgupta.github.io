import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const BOARD_SIZE = 8;
const CANDY_COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

const getRandomCandy = () => CANDY_COLORS[Math.floor(Math.random() * CANDY_COLORS.length)];

const createBoard = () => Array.from({ length: BOARD_SIZE * BOARD_SIZE }, getRandomCandy);

export default function CandyCrush() {
  const [board, setBoard] = useState(createBoard);
  const [selected, setSelected] = useState(null);

  const swapCandies = (index1, index2) => {
    const newBoard = [...board];
    [newBoard[index1], newBoard[index2]] = [newBoard[index2], newBoard[index1]];
    setBoard(newBoard);
  };

  const handleClick = (index) => {
    if (selected === null) {
      setSelected(index);
    } else {
      swapCandies(selected, index);
      setSelected(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Candy Crush Clone</h1>
      <div className="grid grid-cols-8 gap-1">
        {board.map((color, index) => (
          <motion.div
            key={index}
            className={`w-12 h-12 rounded-md cursor-pointer bg-${color}-500`}
            onClick={() => handleClick(index)}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
}