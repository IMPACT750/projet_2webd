import { ArtworkCard } from "../components/ArtworkCard/ArtworkCard";
import { useArtworkIdQuery } from "../queries/Artwork/useArtworkId";
import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";

export function ArtworkListPage() {
  const [ArtorkIdUse, setArtorkIdUse] = useState<number[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 9;
  const ArtworkIds = useArtworkIdQuery();

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
  }, [offset, limit, ArtworkIds.data, ArtworkIds.isError, ArtworkIds.isLoading]); // Add ArtworkIds dependencies

  if (ArtworkIds.isLoading) {
    return <div>Chargement...</div>;
  }

  if (ArtworkIds.isError) {
    return <div>Erreur</div>;
  }

  return (
    <div>
      <div 
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3rem",
        }}
      >
        {ArtorkIdUse.map((id) => (
          <ArtworkCard ArtworkId={id} key={id} />
        ))}
      </div>
      <div style={
        {
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
        }
      }
      >
        <Pagination
          color="secondary"
          count={Math.ceil(ArtworkIds.data!.objectIDs.length / limit)}
          onChange={(_event, page) => {
            setOffset((page - 1) * limit);
          }}
        />
      </div>
    </div>
  );
}
