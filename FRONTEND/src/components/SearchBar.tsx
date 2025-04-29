import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <motion.input
      initial={{ opacity: 0, width: 0 }}
      animate={{
        opacity: 1,
        width: "350px",
        boxShadow: "0 0 0.2rem white",
      }}
      exit={{ opacity: 0, width: 0 }}
      transition={{ duration: 0.2 }}
      type="text"
      placeholder="Search..."
      className="h-8 px-2 rounded bg-white text-black focus:outline-none"
    />
  );
}
