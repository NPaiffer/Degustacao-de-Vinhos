import { FaSearch } from "react-icons/fa";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

function Header({ search, setSearch }: HeaderProps) {
  return (
    <header className="bg-bordo-700 shadow px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-white">
          Degustação de Vinhos
        </h1>

        <div className="relative w-full sm:w-80">
          <label htmlFor="search" className="sr-only">
            Buscar sessão
          </label>
          <input
            id="search"
            type="text"
            placeholder="Buscar sessão..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-bordo-300 bg-bordo-600 text-white placeholder-bordo-100 focus:outline-none focus:ring-2 focus:ring-bordo-300"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bordo-100" />
        </div>
      </div>
    </header>
  );
}

export default Header;
