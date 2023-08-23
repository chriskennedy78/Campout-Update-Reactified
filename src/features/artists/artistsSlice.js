import { ARTISTS } from "../../app/shared/ARTISTS";

export const selectAllArtists = () => {
    return ARTISTS;
};

export const selectFeaturedArtist = () => {
    return ARTISTS.find((artist) => artist.featured);
};
