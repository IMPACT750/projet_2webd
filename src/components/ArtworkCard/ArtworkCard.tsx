import {CardContent, Typography } from "@material-ui/core";
import { useArtworkQuery } from "../../queries/Artwork/useArtwork";
import { ArtworkDetail } from "../../type/ArtworkType";
import styles from "./ArtworkCard.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ArtworkProps {
  ArtworkId: number;
}

export function ArtworkCard(props: ArtworkProps) {
  const [isOvered, setIsOvered] = useState(false);
  const [Artwork, setArtwork] = useState<ArtworkDetail | undefined>();
  const artwork = useArtworkQuery(props.ArtworkId);

  useEffect(() => {
    setArtwork(artwork.data);
  }, [artwork.data]);

  if (artwork.isLoading) {
    return <div>Chargement...</div>;
  }

  if (artwork.isError) {
    return <div>Error: Artwork not found</div>;
  }

  return (
    <Link to={`/${props.ArtworkId}`}>
      <div
        onMouseOver={() => setIsOvered(true)}
        onMouseOut={() => setIsOvered(false)}
        style={{
          backgroundColor: isOvered
            ? "rgba(105, 105, 105, 0.633)"
            : "transparent",
        }}
        className={styles.card}
      >
        <img
          src={Artwork?.primaryImageSmall}
          alt={Artwork?.title}
          className={styles.img}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {Artwork?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Artwork?.artistDisplayName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Artwork?.objectDate}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Artwork?.dimensions}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Artwork?.department}
          </Typography>
        </CardContent>
      </div>
    </Link>
  );
}
