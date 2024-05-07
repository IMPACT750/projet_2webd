

import { useState, useEffect } from 'react'; 
import { useArtworkQuery } from "../queries/Artwork/useArtwork";
import {Typography } from '@material-ui/core'; 
import { ArtworkDetail } from '../type/ArtworkType';
import { useParams } from 'react-router-dom';


export function ArtworkDetailCard() {
    const [Artwork, setArtwork] = useState<ArtworkDetail | undefined>();
    const props = useParams();
    const artwork = useArtworkQuery(parseInt(props.ArtworkId!)); 
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
        <>
            <img
                src={Artwork?.primaryImageSmall}
                alt={Artwork?.title}
                //className={styles.img}
            />
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
                    {Artwork?.medium}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {Artwork?.dimensions}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {Artwork?.creditLine}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {Artwork?.department}
                </Typography>
        </>
    );
}



