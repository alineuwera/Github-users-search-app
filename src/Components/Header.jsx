import { Sun, Moon } from "lucide-react";

function Header({ toggleTheme, isDarkMode }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        devfinder
      </h1>
      <button onClick={toggleTheme} className="flex items-center gap-2">
        {isDarkMode ? (
          <>
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-300">
              Light
            </span>
            <Sun className="h-5 w-5 text-yellow-400" />
          </>
        ) : (
          <>
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-600">
              Dark
            </span>
            <Moon className="h-5 w-5 text-gray-600" />
          </>
        )}
      </button>
    </div>
  );
}

export default Header;
