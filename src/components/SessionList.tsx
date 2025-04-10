import { useEffect, useState } from "react";
import SessionCard from "./SessionCard";
import WineModal from "./WineModal";

type Wine = {
  wine: string;
  winery: string;
  location: string;
  image?: string;
  rating: {
    average: number;
    reviews: string;
  };
};

type Props = {
  search: string;
};

const SessionList = ({ search }: Props) => {
  const [sessions, setSessions] = useState<Wine[]>([]);
  const [filtered, setFiltered] = useState<Wine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/wines/reds")
      .then((res) => res.json())
      .then((data) => {
        setSessions(data);
        setFiltered(data);
      })
      .catch(() => setError("Erro ao buscar vinhos 🍷"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const term = search.toLowerCase();
    setFiltered(sessions.filter((s) => s.wine.toLowerCase().includes(term)));
  }, [search, sessions]);

  if (loading)
    return <div className="p-6 text-center text-lg text-gray-500 animate-pulse">Carregando vinhos...</div>;

  if (error)
    return <div className="p-6 text-center text-red-600 font-semibold">{error}</div>;

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-12">Nenhum vinho encontrado.</div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.slice(0, 12).map((session, index) => (
            <SessionCard key={index} session={session} onClick={() => setSelectedWine(session)} />
          ))}
        </div>
      )}

      {selectedWine && (
        <WineModal wine={selectedWine} onClose={() => setSelectedWine(null)} />
      )}
    </div>
  );
};

export default SessionList;
