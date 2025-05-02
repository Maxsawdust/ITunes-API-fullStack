import { SongType } from "../../types";

interface Props {
  song: SongType;
}

export default function SongCard({ song }: Props) {
  return (
    //
    <div className="w-full px-5 py-2 bg-main flex gap-5 justify-between items-center">
      <div className="flex gap-5 items-center">
        <img src={song.artworkUrl60} alt="" className="" />
        <p className="text-xl">{song.trackName}</p>
        {song.trackExplicitness === "explicit" && (
          <span className="h-6 w-6 bg-secondary grid place-content-center text-xl rounded-sm">
            <p className="mb-[2px]">E</p>
          </span>
        )}
      </div>

      <p className="">
        {(song.trackTimeMillis / 1000 / 60).toFixed(2)} minutes
      </p>
    </div>
  );
}
