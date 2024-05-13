import { useQuery } from "@tanstack/react-query";


interface ArtworkIdResponse {
    total: number;
    objectIDs: number[];
}


export function useArtworkIdisHighlightQuery() {
  return useQuery({
    queryKey: ["ArtworkId"],
    queryFn: async () => {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=sunflowers`);
      const json = await response.json();
      return json as ArtworkIdResponse;
    },
  });
}


