import { useState, useEffect } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import UserInfo from "./Components/UserInfo";
import "./index.css";
import { applyInitialTheme } from "./Theme";

applyInitialTheme();  

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="max-w-2xl mx-auto">
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <SearchBar onSearch={handleSearch} error={error} />
          {loading && <p className="text-gray-700 dark:text-white">Loading...</p>}
          {userData && <UserInfo user={userData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
