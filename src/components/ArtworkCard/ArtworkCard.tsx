import { ArtworkDetail } from "../../type/ArtworkType";
import { useArtworkQuery} from "../../queries/Artwork/useArtwork";
import styles from "./ArtworkCard.module.css";
import { useState } from "react";

interface Artwork {
  ArtworkId : number;
}

export function ArtworkCard(props: Artwork) {
  const [isOvered, setIsOvered] = useState(false);

  const artwork = useArtworkQuery(props.ArtworkId);

  if (artwork.isLoading) {
    return <div>Chargement...</div>;
  }

  if (artwork.isError) {
    return <div>Erreur</div>;
  }

  const Artwork = artwork.data!.Artwork as ArtworkDetail;


  return (
    <div
      className={styles.artwork}
      onMouseOver={() => setIsOvered(true)}
      onMouseOut={() => setIsOvered(false)}
      style={{
        backgroundColor: isOvered
          ? "rgba(105, 105, 105, 0.633)"
          : "transparent",
      }}
    >
      <img src={Artwork.primaryImage} alt={Artwork.title} className={styles.img} />
      <div >
        <h2>{Artwork.title}</h2>
        <p>{Artwork.artistDisplayName}</p>
        <p>{Artwork.objectDate}</p>
        <p>{Artwork.medium}</p>
        <p>{Artwork.dimensions}</p>
        <p>{Artwork.creditLine}</p>
        <p>{Artwork.department}</p>
      </div>
    </div>
  );
}
