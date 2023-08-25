// this page will handle all the global application states for the application

import { TICKETS } from "../../app/shared/TICKETS";

// selector function that will return all the campsites

export const selectAllTickets = () => {
    return TICKETS;
};
