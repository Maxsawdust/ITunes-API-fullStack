import ResultType from "../types/resultsType";

// function to get Id of result given all the various Ids that the API returns
const convertResultDate = (result: ResultType) => {
  const date = new Date(result.releaseDate);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default convertResultDate;
