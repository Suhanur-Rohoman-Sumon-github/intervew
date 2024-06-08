import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { useDrag, useDrop } from "react-dnd";
import { SketchPicker } from "react-color";

const ItemTypes = {
  COLOR: "color",
};

// eslint-disable-next-line react/display-name
const ColorBox = forwardRef(
  ({ color, index, moveColor, replaceColor }, ref) => {
    const [showPicker, setShowPicker] = useState(false);
    const internalRef = useRef(null);

    useImperativeHandle(ref, () => internalRef.current);

    const [, drop] = useDrop({
      accept: ItemTypes.COLOR,
      hover(item) {
        if (item.index !== index) {
          moveColor(item.index, index);
          item.index = index;
        }
      },
    });

    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.COLOR,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const handleColorChange = (newColor) => {
      replaceColor(index, newColor.hex);
      setShowPicker(false);
    };

    const togglePicker = () => {
      setShowPicker(!showPicker);
    };

    drag(drop(internalRef));

    return (
      <div
        ref={internalRef}
        style={{
          margin: "10px",
          cursor: "move",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <div
          onClick={togglePicker}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: color,
          }}
        />
        {showPicker && (
          <div style={{ position: "absolute", zIndex: 2 }}>
            <div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              onClick={togglePicker}
            />
            <SketchPicker color={color} onChangeComplete={handleColorChange} />
          </div>
        )}
      </div>
    );
  }
);

export default ColorBox;
