import React, { useState, useEffect } from "react";

export default function WomensDayApp() {
  const [tapCount, setTapCount] = useState(0);
  const [message, setMessage] = useState("");
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (tapCount === 3) {
      setMessage("З 8 Березня! 💋");
      generateHearts();
    }
  }, [tapCount]);

  const wrongAnswer = () => {
    setMessage("Ти натискаєш не туди!");
  };

  const correctAnswer = () => {
    setTapCount(tapCount + 1);
    setMessage(`Правильний вибір! (${tapCount + 1}/3)`);
  };

  const generateHearts = () => {
    const newHearts = [];
    for (let i = 0; i < 50; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
      });
    }
    setHearts(newHearts);
  };

  return (
    <div className="h-screen bg-pink-300 flex flex-col items-center justify-center relative overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-3xl"
          style={{ left: heart.x, top: heart.y }}
        >
          🖤
        </span>
      ))}
      <h1 className="text-2xl font-bold">Що сьогодні за свято?</h1>
      <button
        className="bg-red-400 text-white px-4 py-2 mt-4 rounded"
        onClick={wrongAnswer}
      >
        День гарбуза
      </button>
      <button
        className="bg-red-600 text-white px-4 py-2 mt-2 rounded text-lg"
        onClick={correctAnswer}
      >
        8 Березня!
      </button>
      <p className="text-lg font-bold mt-4 text-green-700">{message}</p>
    </div>
  );
}