import { Box, Grid, Typography } from "@mui/material";
import { useDepartmentsQuery } from "../queries/department/useDepartments";
import { DepartmentCard } from "../components/DepartmentCard/DepartmentCard";
import { useArtworkIdisHighlightQuery } from "../queries/Artwork/useArtworkIdIsHighlight";
import { ArtworkCard } from "../components/ArtworkCard/ArtworkCard";
import Carousel from "react-material-ui-carousel";
import styles from "./homePage.module.css";

export function HomePage() {
  const departments = useDepartmentsQuery();
  const artworkIdisHighlight = useArtworkIdisHighlightQuery();

  if (departments.isLoading || artworkIdisHighlight.isLoading) {
    return <div>Chargement...</div>;
  }

  if (departments.isError || artworkIdisHighlight.isError) {
    return <div>Erreur</div>;
  }

  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        marginTop="4rem"
        style={{ fontFamily: "Roboto", fontWeight: 700, color: "#333" }}
      >
        Œuvres d'art en vedette
      </Typography>

      <Box className={styles.carouselContainer}>
        <Carousel>
          {artworkIdisHighlight.data!.objectIDs.map((id) => (
            <div key={id} className={styles.carouselItem}>
              <ArtworkCard ArtworkId={id} />
            </div>
          ))}
        </Carousel>
      </Box>

      <Typography
        variant="h4"
        component="h2"
        marginTop="4rem"
        style={{ fontFamily: "Roboto", fontWeight: 700, color: "#333" }}
      >
        Liste des départements
      </Typography>
      <Grid container spacing={3} marginTop="2rem">
        {departments.data!.departments.map((department) => (
          <Grid item xs={12} sm={6} md={4} key={department.departmentId}>
            <DepartmentCard
              departmentId={department.departmentId}
              displayName={department.displayName}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
