import { useAppSelector } from "../../store/hooks/reduxHooks";
import { ResultCard } from "../../components";
import getResultId from "../../utils/getResultId";

export default function CollectionPage() {
  const searchResults = useAppSelector((state) => state.search.searchResults);

  if (searchResults.resultCount === 0) {
    return (
      <div className="flex-1 flex flex-col gap-3 justify-center items-center">
        <h1 className="text-3xl font-semibold">
          Uh Oh, looks like there were no search results...
        </h1>
        <h2 className="text-2xl">Try Searching again</h2>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-5 py-5 items-center overflow-auto">
      <h1 className="text-5xl font-semibold mb-5">Top Results</h1>
      {searchResults.results.map((result, index) => {
        const resultId = getResultId(result);
        return <ResultCard index={index} result={result} key={resultId} />;
      })}
    </div>
  );
}
