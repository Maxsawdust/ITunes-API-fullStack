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
  kind: string;
  primaryGenreName: string;
  releaseDate: string;
  trackId?: number;
  collectionId?: number;
  trackName?: string;
  collectionName?: string;
  trackViewUrl: string;
}
