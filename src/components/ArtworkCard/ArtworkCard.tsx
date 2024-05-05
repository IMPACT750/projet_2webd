import { useArtworkQuery } from "../../queries/Artwork/useArtwork";
import { ArtworkDetail } from "../../type/ArtworkType";
import styles from "./ArtworkCard.module.css";
import { useEffect, useState } from "react";

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

      <div
        
        onMouseOver={() => setIsOvered(true)}
        onMouseOut={() => setIsOvered(false)}
        style={{
          backgroundColor: isOvered
            ? "rgba(105, 105, 105, 0.633)"
            : "transparent",
        }}
      >
          <img src={Artwork?.primaryImageSmall} alt={Artwork?.title} className={styles.img} />
        <div>
          <h2>{Artwork?.title}</h2>
          <p>{Artwork?.artistDisplayName}</p>
          <p>{Artwork?.objectDate}</p>
          <p>{Artwork?.medium}</p>
          <p>{Artwork?.dimensions}</p>
          <p>{Artwork?.creditLine}</p>
          <p>{Artwork?.department}</p>
        </div>
      </div>
    );
}
