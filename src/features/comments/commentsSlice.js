import { COMMENTS } from "../../app/shared/COMMENTS";

export const selectCommentsByCabinId = (cabinId) => {
    return COMMENTS.filter((comment) => comment.cabinId === parseInt(cabinId));
};
