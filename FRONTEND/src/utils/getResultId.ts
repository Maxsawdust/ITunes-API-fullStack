import { SongType } from "../types";
import ResultType from "../types/resultsType";

// function to get Id of result given all the various Ids that the API returns
const getResultId = (result: ResultType | SongType) => {
  if ("trackId" in result) return result.trackId;
  if ("collectionId" in result) return result.collectionId;
};

export default getResultId;
