import { Search } from "lucide-react";z'
import { FaSearch } from "react-icons/fa";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

function Header({ search, setSearch }: HeaderProps) {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800">Degustação de Vinhos</h1>

      <div className="relative w-72">
        <input
          type="text"
          placeholder="Buscar sessão..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
      </div>
    </header>
  );
}

export default Header;
