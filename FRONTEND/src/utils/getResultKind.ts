import ResultType from "../types/resultsType";

// function to get Id of result given all the various Ids that the API returns
const getResultKind = (result: ResultType) => {
  if ("kind" in result) return result.kind;
  if ("wrapperType" in result) return result.wrapperType;
};

export default getResultKind;
