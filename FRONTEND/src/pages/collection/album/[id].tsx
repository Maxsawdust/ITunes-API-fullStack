import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumType from "../../../types/albumType";
import { AlbumCard } from "../../../components";
import { SongType } from "../../../types";
import getResultId from "../../../utils/getResultId";

// /collection/album/:id
export default function AlbumPage() {
  const [contentToDisplay, setContentToDisplay] = useState<AlbumType>();
  const [albumSongs, setAlbumSongs] = useState<SongType[]>([]);

  // the album's collectionId from params
  const { id } = useParams();

  // fetch the album and the songs within the album on mount
  useEffect(() => {
    getAlbum();
    getAlbumSongs();
  }, []);

  const getAlbum = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/search/album/${id}`,
        {
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.messsage);
      }

      console.log(data.results);

      setContentToDisplay(data.results[0]);
    } catch (err: any) {
      console.error(err.messsage);
    }
  };

  const getAlbumSongs = async () => {
    try {
      console.log("id:", id);
      const response = await fetch(
        `http://localhost:8080/api/search/album/songs/${id}`,
        {
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.messsage);
      }

      console.log("songs", data);

      const uniformData: SongType[] = data.results.map((result: SongType) => {
        return { ...result, id: getResultId(result) };
      });

      setAlbumSongs(uniformData);
    } catch (err: any) {
      console.error(err.messsage);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <AlbumCard album={contentToDisplay!} songs={albumSongs} />
    </div>
  );
}
