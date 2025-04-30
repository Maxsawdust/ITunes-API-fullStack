import ResultType from "../types/resultsType";
import getResultName from "../utils/getResultName";

interface ResultCardProps {
  result: ResultType;
}

export default function ResultCard({ result }: ResultCardProps) {
  const resultName = getResultName(result);
  return <div>{resultName}</div>;
}
