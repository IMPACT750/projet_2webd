import{ useState, useEffect } from "react";
import { Grid, Box, Pagination } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSearchAdvancedQuery } from "../queries/Search/useSearchAdvanced";
import { ArtworkCard } from "../components/ArtworkCard/ArtworkCard";

export function SearchAdvancedPage() {
  const [ArtorkIdUse, setArtorkIdUse] = useState<number[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 9;
  const { query } = useParams<{ query: string }>();
  const ArtworkIds = useSearchAdvancedQuery(decodeURIComponent(query!));

  useEffect(() => {
    if (ArtworkIds.isLoading || ArtworkIds.isError || !ArtworkIds.data?.objectIDs) {
      return;
    }

    setArtorkIdUse(ArtworkIds.data.objectIDs.slice(offset, offset + limit));
  }, [offset, limit, ArtworkIds.data, ArtworkIds.isError, ArtworkIds.isLoading]);

  if (ArtworkIds.isLoading) {
    return <div>Chargement...</div>;
  }

  if (ArtworkIds.isError) {
    return <div>Erreur lors du chargement des données</div>;
  }

  const objectIDsLength = ArtworkIds.data?.objectIDs?.length;
  const pageCount = objectIDsLength ? Math.ceil(objectIDsLength / limit) : 0;

  return (
    <>
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
          count={pageCount}
          onChange={(_event, page) => {
            setOffset((page - 1) * limit);
          }}
        />
      </Box>
    </>
  );
}
