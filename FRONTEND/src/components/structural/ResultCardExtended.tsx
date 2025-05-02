import ResultType from "../../types/resultsType";
import { Link } from "react-router-dom";
import ResultKindLabel from "./ResultKindLabel";
import { AddToFavourites } from "..";

interface Props {
  contentToDisplay: ResultType | null;
}

export default function ResultCardExtended({ contentToDisplay }: Props) {
  return (
    <div className="h-fit min-w-1/3 max-w-2/3 px-10 py-10 flex flex-col gap-10 rounded-xl bg-secondary relative">
      <ResultKindLabel kind={contentToDisplay?.kind!} />
      <div className="flex gap-10">
        <img src={contentToDisplay?.artworkUrl100} className="h-30 w-30" />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">{contentToDisplay?.name}</h1>
          {contentToDisplay?.kind === "song" && (
            <Link
              to={`/collection/album/${contentToDisplay?.collectionId}`}
              className="text-xl underline">
              {contentToDisplay?.collectionName}
            </Link>
          )}
          <p className="text-xl text-[#b0b0b0]">
            {contentToDisplay?.artistName}
          </p>
        </div>
      </div>

      <ul className="">
        <li className="flex gap-2 text-[#b0b0b0]">
          Genre:{" "}
          <p className="text-white">{contentToDisplay?.primaryGenreName}</p>
        </li>
        <li className="flex gap-2 text-[#b0b0b0]">
          Released:<p className="text-white">{contentToDisplay?.date}</p>
        </li>
      </ul>

      {contentToDisplay && <AddToFavourites result={contentToDisplay} />}
    </div>
  );
}
