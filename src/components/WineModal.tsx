import { Wine } from "../../api";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  wine: Wine;
  onClose: () => void;
};

const WineModal = ({ wine, onClose }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
        className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative"
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
            ✕
        </button>
        <img
            src={wine.image}
            alt={wine.wine}
            className="w-full h-56 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{wine.wine}</h2>
        <p className="text-gray-700">🍇 <strong>{wine.winery}</strong></p>
        <p className="text-sm text-gray-600">📍 {wine.location}</p>
        <p className="text-yellow-600 mt-2">⭐ {wine.rating.average} ({wine.rating.reviews})</p>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
};

export default WineModal;
