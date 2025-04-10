import { useState } from "react";
import SessionList from "./components/SessionList";
import { FiSearch } from "react-icons/fi";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md p-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-purple-800">Degustação de Vinhos</h1>
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Buscar sessão..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <FiSearch className="absolute top-2.5 left-3 text-gray-500 text-lg" />
          </div>
        </div>
      </header>

      <main>
        <SessionList search={search} />
      </main>
    </div>
  );
};

export default App;
