import { useQuery } from "@tanstack/react-query";


interface ArtworkIdResponse {
    total: number;
    objectIDs: number[];
}


export function useArtworkIdQuery() {
  return useQuery({
    queryKey: ["ArtworkId"],
    queryFn: async () => {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`);
      const json = await response.json();
      return json as ArtworkIdResponse;
    },
  });
}



