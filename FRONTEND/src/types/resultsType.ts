/*
 * This interface represents all properties common to the different media types
 * from the searchAPI.
 * The main ones to note are the trackID vs collectionId, which are optional,
 * because it seems that ebooks are treated as collections, and not tracks,
 * so they do not have "track" prefixed properties - annoyingly.
 */

export default interface ResultType {
  artistName: string;
  artworkUrl100: string;
  kind?: string;
  wrapperType?: string;
  primaryGenreName: string;
  releaseDate: Date;
  date: string;
  trackId?: number;
  collectionId?: number;
  id?: number;
  trackName?: string;
  collectionName?: string;
  name?: string;
  trackViewUrl: string;
}
