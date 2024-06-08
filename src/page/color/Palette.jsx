import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import ColorBox from "./ColorBox";
const Palette = () => {
  const initialColors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F3FF33",
    "#33FFF3",
    "#FF33A1",
    "#A133FF",
    "#FFB533",
  ];
  const [colors, setColors] = useState(initialColors);

  const moveColor = (dragIndex, hoverIndex) => {
    const draggedColor = colors[dragIndex];
    setColors(
      update(colors, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedColor],
        ],
      })
    );
  };

  const replaceColor = (index, newColor) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", flexWrap: "wrap", width: "400px" }}>
        {colors.map((color, index) => (
          <ColorBox
            key={index}
            index={index}
            color={color}
            moveColor={moveColor}
            replaceColor={replaceColor}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default Palette;
