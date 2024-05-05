/** Recuperer les donne du mok et les mettre dans les artwokcar */
import { ArtworkCard } from "../components/ArtworkCard/ArtworkCard";
import { useArtworkIdQuery} from "../queries/Artwork/useArtworkId";
import { useState } from "react";

export function ArtworkListPage() {
  const [ArtorkIdUse, setArtorkIdUse] = useState<number[]>([]); // Specify the type of ArtorkIdUse as an array of numbers
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(0);
  setLimit(10);
  const ArtworkIds = useArtworkIdQuery();

  if (ArtworkIds.isLoading) {
    return <div>Chargement...</div>;
  }

  if (ArtworkIds.isError) {
    return <div>Erreur</div>;
  }

  setArtorkIdUse(ArtworkIds.data!.objectIDs.slice(offset, offset + limit));


  return (
    <div>
      <div className="artwork-list">
        {ArtorkIdUse.map((id) => (
          <ArtworkCard ArtworkId={id} key={id} />
        ))}
      </div>
      <button onClick={() => setOffset(offset + limit)}>Suivant</button>
      <button onClick={() => setOffset(offset - limit)}>Precedent</button>
    </div>
  );
}
