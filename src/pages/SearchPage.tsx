import { ArtworkCard } from "../components/ArtworkCard/ArtworkCard";
import { useState, useEffect } from "react";
import { Pagination, Grid, Typography, Box } from "@mui/material";
import { useSearchQuery } from "../queries/Artwork/useSearch";
import { useParams } from "react-router-dom";

export function SearchPage() {
    const queries = useParams();
  const [ArtorkIdUse, setArtorkIdUse] = useState<number[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 9;
  const ArtworkIds = useSearchQuery(queries.searchTerm!);

  useEffect(() => {
    if (ArtworkIds.isLoading) {
      return;
    }

    if (ArtworkIds.isError) {
      return;
    }

    if (ArtworkIds.data) {
      setArtorkIdUse(ArtworkIds.data.objectIDs.slice(offset, offset + limit));
    }
  }, [
    offset,
    limit,
    ArtworkIds.data,
    ArtworkIds.isError,
    ArtworkIds.isLoading,
  ]);
  if (ArtworkIds.isLoading) {
    return <div>Chargement...</div>;
  }

  if (ArtworkIds.isError) {
    return <div>Erreur</div>;
  }

  return (
    <>
      <Typography variant="h5" component="h2">
        Highlights Van Gogh
      </Typography>

      <Grid container spacing={3} wrap="wrap" marginTop="4rem">
        {ArtorkIdUse.map((id) => (
          <Grid item xs={12} sm={8} md={4} key={id}>
              <Box height="100%" display="flex" alignItems="stretch">
                <ArtworkCard ArtworkId={id} />
              </Box>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" marginTop="4rem">
        <Pagination
          color="secondary"
          count={Math.ceil(ArtworkIds.data!.objectIDs.length / limit)}
          onChange={(_event, page) => {
            setOffset((page - 1) * limit);
          }}
        />
      </Box>
    </>
  );
}
