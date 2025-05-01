import { useParams } from "react-router";

export default function CollectionItem() {
  const { id } = useParams();
  return (
    //
    <div className="flex-1 flex justify-center items-center">
      <div className="h-4/5 w-2/3 rounded-xl bg-secondary">
        <img src="" alt="" className="" />
      </div>
    </div>
  );
}
