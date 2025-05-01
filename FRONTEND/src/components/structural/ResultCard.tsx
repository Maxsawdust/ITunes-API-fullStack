import { Link } from "react-router";
import ResultType from "../../types/resultsType";
import { ResultKindLabel, AddToFavourites } from "../";
import { easeIn, motion } from "framer-motion";

interface ResultCardProps {
  result: ResultType;
  index: number;
}

export default function ResultCard({ result, index }: ResultCardProps) {
  return (
    <motion.div
      initial={{
        x: -75,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: easeIn,
        delay: 0.1 * index,
      }}
      className="min-h-30 w-200 px-2.5 py-2.5 rounded-md flex items-center gap-5 bg-secondary relative">
      <img src={result.artworkUrl100} alt="" className="" />
      <Link to={`/collection/${result.id}`} className="h-full w-7/10 py-2 ">
        <h1 className="text-lg underline">{result.name}</h1>
        {result.kind && result.kind === "song" && (
          <h2 className="text-md text-[#b0b0b0] underline">
            {result.collectionName}
          </h2>
        )}
        <h2 className="text-md text-[#b0b0b0]">{result.artistName}</h2>
      </Link>

      <ResultKindLabel kind={result.kind!} />

      <AddToFavourites result={result} />
    </motion.div>
  );
}
