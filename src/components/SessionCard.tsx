import { Wine } from "../../api";
import { motion } from "framer-motion";

type Props = {
  session: Wine;
  onClick?: () => void;
};

const SessionCard = ({ session, onClick }: Props) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      {session.image && (
        <img
          src={session.image}
          alt={session.wine}
          className="mb-3 w-full h-48 object-cover rounded-lg"
        />
      )}
      <h2 className="text-lg font-semibold">{session.wine}</h2>
      <p className="text-gray-600">{session.winery}</p>
      <p className="text-sm text-gray-500">{session.location}</p>
      <p className="text-yellow-600 font-medium mt-1">⭐ {session.rating?.average || "N/A"}</p>
    </motion.div>
  );
};

export default SessionCard;
