import { useParams } from "react-router";

export default function CollectionItem() {
  const { id } = useParams();
  return (
    //
    <div>CollectionItem, {id}</div>
  );
}
