import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultType from "../../types/resultsType";
import getResultId from "../../utils/getResultId";
import getResultName from "../../utils/getResultName";
import getResultKind from "../../utils/getResultKind";
import convertResultDate from "../../utils/convertResultDate";
import { ResultCardExtended } from "../../components";

export default function CollectionItem() {
  const [contentToDisplay, setContentToDisplay] = useState<ResultType | null>(
    null
  );
  const { id } = useParams();

  // fetch API to get content with corresponding id
  useEffect(() => {
    getContentDetails();
  }, [id]);

  const getContentDetails = async () => {
    try {
      // fetch with credentials to allow cookies
      const response = await fetch(`http://localhost:8080/api/search/${id}`, {
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.messsage);
      }

      //  add a uniform id, name, kind, and date property to the data
      // this adds parity between all media types
      const formattedData: ResultType = {
        ...data.results[0],
        id: getResultId(data.results[0]),
        name: getResultName(data.results[0]),
        kind: getResultKind(data.results[0]),
        date: convertResultDate(data.results[0]),
      };

      setContentToDisplay(formattedData);
    } catch (err: any) {
      console.error(err.messsage);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <ResultCardExtended contentToDisplay={contentToDisplay} />
    </div>
  );
}
