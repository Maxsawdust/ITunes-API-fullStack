import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

// custom hooks to avoid typing dispatch and selector every time I want to use them
const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export { useAppDispatch, useAppSelector };
