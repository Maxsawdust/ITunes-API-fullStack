import ResultType from "../types/resultsType";

// function to get result name based on its specific propery
const getResultName = (result: ResultType) => {
  if ("trackName" in result) return result.trackName;
  if ("collectionName" in result) return result.collectionName;
};

export default getResultName;
