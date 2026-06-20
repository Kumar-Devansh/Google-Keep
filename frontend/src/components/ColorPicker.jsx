const colors = [
  '#ffffff',
  '#f28b82',
  '#fbbc04',
  '#fff475',
  '#ccff90',
  '#a7ffeb',
  '#cbf0f8',
  '#aecbfa',
  '#d7aefb'
];

const ColorPicker = ({ selected, onSelect }) => {
  return (
    <div className="color-picker">
      {colors.map((color) => (
        <span
          key={color}
          className="color-circle"
          style={{
            backgroundColor: color,
            border: selected === color ? '2px solid black' : '1px solid #ccc'
          }}
          onClick={() => onSelect(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
