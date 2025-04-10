import { useState } from "react";
import Header from "./components/Header";
import SessionList from "./components/SessionList";
import NewSessionModal from "./components/NewSessionModal";
import { motion } from "framer-motion";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header search={search} setSearch={setSearch} />

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-vinho-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold hover:bg-vinho-700 transition-all mb-8"
          >
            Nova sessão de degustação
          </motion.button>

          <SessionList search={search} />
        </motion.div>
      </main>

      <NewSessionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;