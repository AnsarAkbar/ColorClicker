import { useState } from "react";

function App() {
  const [color, setColor] = useState(null);
  let btns = ["Green", "Blue", "Gray", "Black", "Teal", "Yellow", "Reset"];
  let colors = [
    "bg-green-700",
    "bg-blue-600",
    "bg-gray-700",
    "bg-teal-600",
    "bg-orange-700",
    "bg-yellow-300"
    ];

  return (
    <div className="flex flex-col h-screen">
      <div className={`flex-grow ${color} p-4`}>
      </div>
      <div className="flex-shrink-0 flex justify-center items-end p-4">
        <div className="flex space-x-4">
          {btns.map((btn, index) => (
            <button
              key={btn}
              onClick={() => setColor(colors[index])}
              className={`py-2 px-4 font-bold border ${colors[index]} rounded-3xl shadow-lg`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;