import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NewSessionModal = ({ isOpen, onClose }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 relative"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-2 right-3 text-bordo-500 hover:text-bordo-700 text-2xl"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center text-bordo-700">
              Nova Sessão de Degustação
            </h2>

            <form className="space-y-4">
              {["Nome do vinho", "Vinícola", "Localização"].map((label, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bordo-500"
                    placeholder={`Ex: ${label === "Nome do vinho" ? "Cabernet Sauvignon" : label === "Vinícola" ? "Vinícola Aurora" : "Serra Gaúcha, RS"}`}
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-bordo-600 hover:bg-bordo-700 text-white py-2 px-4 rounded-lg transition font-medium"
              >
                Salvar Sessão
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewSessionModal;
