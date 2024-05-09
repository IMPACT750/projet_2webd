import { useQuery } from "@tanstack/react-query";

interface ArtworkIdResponse {
  total: number;
  objectIDs: number[];
}

export function useSearchQuery(query: string) {
  return useQuery({
    queryKey: ["ArtworkId", query],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`
      );
      const json = await response.json();
      return json as ArtworkIdResponse;
    },
  });
}
