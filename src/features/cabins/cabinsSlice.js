// this page will handle all the global application states for the application

import { CABINS } from "../../app/shared/CABINS";

// selector function that will return all the campsites

export const selectAllCabins = () => {
    return CABINS;
};

export const selectCabinById = (id) => {
    return CABINS.find((cabin) => cabin.id === parseInt(id));
};

export const selectFeaturedCabin = () => {
    return CABINS.find((cabin) => cabin.featured);
};

export const selectAccommodationsByBedId = (bedId) => {
    return CABINS.filter((accommodations) => accommodations.bedId);
};

export const selectCabinByName = (name) => {
    return CABINS.find((cabin) => cabin.name);
};
