import { Col } from "reactstrap";
import Artist from "./Artist";
import { selectAllArtists } from "./artistsSlice";

const ArtistsList = () => {
    const artists = selectAllArtists();

    return (
        <Col className="mt-4">
            {artists.map((artist) => {
                return (
                    <div className="d-flex mb-5" key={artist.id}>
                        <Artist artist={artist} />
                    </div>
                );
            })}
        </Col>
    );
};

export default ArtistsList;
