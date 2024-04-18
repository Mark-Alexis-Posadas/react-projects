export default function ThemeItem({ currentTheme, theme, handleClick }) {
  return (
    <button
      className={`text-white w-10 h-10 rounded-full mr-2 ${theme.bgColor}`}
      style={currentTheme === theme.bgColor ? { border: "3px solid #222" } : {}}
      onClick={() => handleClick(theme.bgColor)}
    ></button>
  );
}
