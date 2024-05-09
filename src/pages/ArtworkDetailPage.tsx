import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { useArtworkQuery } from "../queries/Artwork/useArtwork";
import { ArtworkDetail } from "../type/ArtworkType";
import { useParams } from "react-router-dom";

export function ArtworkDetailCard() {
  const [Artwork, setArtwork] = useState<ArtworkDetail | undefined>();
  const { ArtworkId } = useParams<{ ArtworkId: string }>();
  const artwork = useArtworkQuery(parseInt(ArtworkId!));

  useEffect(() => {
    setArtwork(artwork.data);
  }, [artwork.data]);

  if (artwork.isLoading) {
    return <div>Chargement...</div>;
  }

  if (artwork.isError || !Artwork) {
    return <div>Erreur : Œuvre d'art non trouvée</div>;
  }

  const imageUrl = Artwork.primaryImageSmall
    ? Artwork.primaryImageSmall
    : "https://via.placeholder.com/800x450?text=No+Image+Available";

  return (
    <Grid container justifyContent="center" marginTop="2rem">
      <Grid item xs={12} md={10} lg={8}>
        <Card
          style={{
            width: "100%",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            borderRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            height="450"
            image={imageUrl}
            alt={Artwork.title}
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <CardContent>
            <Box mb={4}>
              <Typography variant="h4" component="h1">
                {Artwork.title}
              </Typography>
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Typography variant="h6" color="textPrimary">
                  Artiste
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {Artwork.artistDisplayName || "Inconnu"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="textPrimary">
                  Date
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {Artwork.objectDate || "Inconnue"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="textPrimary">
                  Moyen
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {Artwork.medium || "Inconnu"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="textPrimary">
                  Dimensions
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {Artwork.dimensions || "Inconnues"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="textPrimary">
                  Ligne de Crédit
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {Artwork.creditLine || "Inconnue"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="textPrimary">
                  Département
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {Artwork.department || "Inconnu"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
