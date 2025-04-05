import { useState } from "react";
import Header from "./components/Header";
import SessionList from "./components/SessionList";
import NewSessionModal from "./components/NewSessionModal";
import { motion } from "framer-motion";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col text-gray-800">
      <Header search={search} setSearch={setSearch} />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-6 max-w-6xl mx-auto w-full"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition mb-8"
          onClick={() => setIsModalOpen(true)}
        >
          Nova sessão de degustação
        </motion.button>

        <SessionList search={search} />
      </motion.main>

      <NewSessionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
