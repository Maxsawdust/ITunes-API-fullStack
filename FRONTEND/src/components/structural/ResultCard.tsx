import { Link } from "react-router";
import ResultType from "../../types/resultsType";
import getResultName from "../../utils/getResultName";
import getResultKind from "../../utils/getResultKind";
import { ResultKindLabel, AddToFavourites } from "../";

interface ResultCardProps {
  result: ResultType;
}

export default function ResultCard({ result }: ResultCardProps) {
  const resultName = getResultName(result);
  const resultKind = getResultKind(result);

  return (
    <div className="min-h-30 w-200 px-2.5 py-2.5 rounded-md flex items-center gap-5 bg-secondary relative">
      <img src={result.artworkUrl100} alt="" className="" />
      <Link to={`/collection/${result.id}`} className="h-full w-7/10 py-2 ">
        <h1 className="text-lg underline">{resultName}</h1>
        <h2 className="text-md text-[#b0b0b0]">{result.artistName}</h2>
      </Link>

      <ResultKindLabel kind={resultKind!} />

      <AddToFavourites result={result} />
    </div>
  );
}
