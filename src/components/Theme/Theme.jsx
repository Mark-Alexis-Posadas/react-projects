import { useState } from "react";
import ThemeItem from "./ThemeItem";
import themeData from "./data";

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState(() =>
    localStorage.getItem("theme")
  );

  const handleClick = (themeColor) => {
    setSelectedTheme(themeColor);
  };

  return (
    <>
      <div className={`w-full h-[350px] ${selectedTheme}`}></div>
      {themeData.map((theme, index) => (
        <ThemeItem
          key={index}
          currentTheme={selectedTheme}
          theme={theme}
          handleClick={handleClick}
        />
      ))}
    </>
  );
}
