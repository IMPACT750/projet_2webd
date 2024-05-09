import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useArtworkQuery } from "../../queries/Artwork/useArtwork";
import { ArtworkDetail } from "../../type/ArtworkType";
import styles from "./ArtworkCard.module.css";

interface ArtworkProps {
  ArtworkId: number;
}

export function ArtworkCard({ ArtworkId }: ArtworkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [Artwork, setArtwork] = useState<ArtworkDetail | undefined>();
  const artwork = useArtworkQuery(ArtworkId);

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
    : "https://via.placeholder.com/400x400?text=No+Image+Available";

  return (
    <Link to={`/${ArtworkId}`} className={styles.link}>
      <Card
        className={styles.card}
        style={{
          backgroundColor: isHovered ? "rgba(105, 105, 105, 0.633)" : "white",
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt={Artwork.title}
          className={styles.img}
        />
        <CardContent className={styles.content}>
          <Box mb={2}>
            <Typography variant="h5" component="h2" className={styles.ellipsis}>
              {Artwork.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={styles.ellipsis}
            >
              {Artwork.artistDisplayName || "Inconnu"}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={styles.ellipsis}
            >
              {Artwork.objectDate || "Inconnue"}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={styles.ellipsis}
            >
              {Artwork.department || "Inconnues"}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              className={styles.ellipsis}
            >
              {Artwork.medium || "Inconnu"}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
