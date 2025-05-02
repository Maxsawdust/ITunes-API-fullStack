import { Link } from "react-router-dom";
import AlbumType from "../../types/albumType";
import ResultKindLabel from "./ResultKindLabel";
import { SongType } from "../../types";
import SongCard from "./SongCard";

interface Props {
  album: AlbumType;
  songs: SongType[];
}

export default function AlbumCard({ album, songs }: Props) {
  const releaseDate = new Date(album?.releaseDate);

  return (
    //
    <div className="max-h-[80vh]  w-1/3 px-6 py-8 flex flex-col gap-6 rounded-xl bg-secondary relative">
      <ResultKindLabel kind={"album"} />
      <div className="flex gap-10">
        <img src={album?.artworkUrl100} className="h-30 w-30" />

        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">{album?.collectionName}</h1>
          <div className="flex justify-between">
            <p className="text-xl text-[#b0b0b0]">{album?.artistName}</p>
            <p className="text-xl">${album?.collectionPrice}</p>
          </div>

          <p className="">
            {releaseDate.toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="h-[2px] mt-5 bg-[#b0b0b0]" />
        </div>
      </div>

      <Link
        to={album?.collectionViewUrl!}
        className="w-fit bg-main px-2 py-2 self-end rounded-md shadow-[0_0_3px_white] hover:shadow-[0_0_5px_white]">
        View in iTunes
      </Link>

      <h2 className="text-2xl font-semibold">Track list</h2>

      <ul className=" shadow-[0_0_3px_white] overflow-scroll">
        {songs.slice(1).map((song) => {
          return (
            <li className="mb-2" key={song.trackId}>
              <SongCard song={song} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
