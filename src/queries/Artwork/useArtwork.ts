
import { useQuery } from "@tanstack/react-query";
import { ArtworkDetail } from "../../type/ArtworkType";

export function useArtworkQuery(objectId: number) {
    return useQuery({
      queryKey: ["Artwork", objectId],
      queryFn: async () => {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
        const json = await response.json();
        return json as ArtworkDetail;
      },
    });
  }
