import {Grid, Typography } from "@mui/material";
import { useDepartmentsQuery } from "../queries/department/useDepartments";
import { DepartmentCard } from "../components/DepartmentCard/DepartmentCard";

export function HomePage() {
  const departments = useDepartmentsQuery();

  if (departments.isLoading) {
    return <div>Chargement...</div>;
  }

  if (departments.isError) {
    return <div>Erreur</div>;
  }

  return (
    <>
    <Typography variant="h5" component="h2">
      Liste des départements
    </Typography>
    <Grid container spacing={3} marginTop="4rem">
      {departments.data!.departments.map((department) => (
        <Grid item xs={12} sm={6} md={4} key={department.departmentId}>
          <DepartmentCard
            departmentId={department.departmentId}
            displayName={department.displayName} />
        </Grid>
      ))}
    </Grid>
    </>
  );
}
