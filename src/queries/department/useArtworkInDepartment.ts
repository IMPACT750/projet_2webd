import { useQuery } from "@tanstack/react-query";



export function useArtworkInDepartmentQuery(DepartmentId: number) {
  return useQuery({
    queryKey: ["Artwork", DepartmentId],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${DepartmentId}`);
      const json = await response.json();
      return json ;
    },
  });
}
