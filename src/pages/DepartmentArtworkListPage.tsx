import { ArtworkCard } from "../components/ArtworkCard/ArtworkCard";
import { useState, useEffect } from "react";
import { Pagination, Grid, Box } from "@mui/material";
import { useArtworkInDepartmentQuery } from "../queries/department/useArtworkInDepartment";
import { useParams } from "react-router-dom";

export function DepartmentArtworkListPage() {
  const [ArtorkIdUse, setArtorkIdUse] = useState<number[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 9;
  const { departmentId } = useParams();
  const ArtworkIds = useArtworkInDepartmentQuery(Number(departmentId));


  useEffect(() => {
    if (ArtworkIds.isLoading || ArtworkIds.isError) {
      return;
    }

    const objectIDs = ArtworkIds.data?.objectIDs;
    if (objectIDs) {
      setArtorkIdUse(objectIDs.slice(offset, offset + limit));
    }
  }, [offset, limit, ArtworkIds.data, ArtworkIds.isError, ArtworkIds.isLoading]);

  if (ArtworkIds.isLoading) {
    return <div>Loading...</div>;
  }

  if (ArtworkIds.isError) {
    return <div>Error</div>;
  }

  const objectIDsLength = ArtworkIds.data?.objectIDs?.length;
  const pageCount = objectIDsLength ? Math.ceil(objectIDsLength / limit) : 0;

  return (
    <>

      <Grid container spacing={3} wrap="wrap" marginTop="4rem">
        {ArtorkIdUse.map((id) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
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
