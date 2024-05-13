import { useQuery } from "@tanstack/react-query";
import { DepartmentData } from "../../type/DepartmentType";

export function useDepartmentsQuery() {
  return useQuery({
    queryKey: ["Departments"],
    queryFn: async () => {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/departments`);
      const json = await response.json();
      return json as DepartmentData;
    },
  });
}
