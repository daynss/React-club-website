import React from 'react';

const Artist = (props) => {
    let artistType = null;
    const artists = props.artist.map((artist, idx) =>
        <li key={idx}>{artist}</li>
    );

    switch (props.category) {
        case 'Hump Day Readings':
            artistType = 'Author:';
            break;
        case 'Deserved Friday Party':
            artistType = 'DJs:';
            break;
        case 'Saturday Night Concert':
            artistType = 'Bands:';
            break;
        case 'Sunday Talk & Learn Session':
            artistType = 'Host:';
            break;
            
        // no default
    }

    return (
        <ul>
            <span>{artistType}</span>
            {artists}
        </ul>
    );
}

export default Artist;