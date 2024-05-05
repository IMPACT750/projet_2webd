
import { useQuery } from "@tanstack/react-query";
import { ArtworkDetail } from "../../type/ArtworkType";


interface ArtworkResponse {
    Artwork: ArtworkDetail;
}

export function useArtworkQuery(objectId: number) {
    return useQuery({
      queryKey: ["Artwork", objectId],
      queryFn: async () => {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/object/${objectId}`);
        const json = await response.json();
        return json as ArtworkResponse;
      },
    });
  }
  