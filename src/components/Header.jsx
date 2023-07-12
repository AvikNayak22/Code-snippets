import { LogoIcon, MoonIcon, SunIcon } from "./assets/icons";
import { useContext } from "react";
import { ThemeContext } from "../App";
const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <header className="header">
      <div className="logo-wrapper">
        <div className="logo">
          <LogoIcon />
          <span>Code snippets</span>
        </div>
        <button onClick={() => setIsDark(!isDark)} className="icon">
          {isDark ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
