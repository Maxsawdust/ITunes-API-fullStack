import { useState } from "react";
import ResultType from "../../types/resultsType";
import { FaStar } from "react-icons/fa";
import { useAppDispatch } from "../../store/hooks/reduxHooks";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../store/reducers/favouritesReducer";

interface Props {
  result: ResultType;
}

export default function AddToFavourites({ result }: Props) {
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useAppDispatch();
  const toggleFavourite = () => {
    // getting the opposite of state value before then updating state to reflect this
    const setAsFavourite = !isFavourite;
    setIsFavourite(!isFavourite);

    setAsFavourite
      ? dispatch(addToFavourites(result))
      : dispatch(removeFromFavourites(result));
  };
  return (
    <button
      className="absolute right-7.5 bottom-7.5 cursor-pointer"
      onClick={toggleFavourite}>
      <FaStar className={`h-7 w-7 ${isFavourite ? "fill-yellow-500" : ""}`} />
    </button>
  );
}
