import { useEffect, useState } from "react";
import ThemeItem from "./ThemeItem";
import themeData from "./data";

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState(() =>
    localStorage.getItem("selectedTheme")
  );

  const handleClick = (themeColor) => {
    setSelectedTheme(themeColor);
  };

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  return (
    <>
      <div className={`w-full h-[750px] ${selectedTheme}`}></div>
      <div className="flex items-center shadow-md bg-slate-50 p-3">
        {themeData.map((theme, index) => (
          <ThemeItem
            key={index}
            currentTheme={selectedTheme}
            theme={theme}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}
