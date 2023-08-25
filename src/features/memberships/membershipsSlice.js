// this page will handle all the global application states for the application

import { MEMBERSHIPS } from "../../app/shared/MEMBERSHIPS";

// selector function that will return all the campsites

export const selectAllMemberships = () => {
    return MEMBERSHIPS;
};
