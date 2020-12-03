import { SEARCH_TAG } from "../constants/ActionTypes";

export function searchTag(payload) {
  return { type: SEARCH_TAG, payload };
}
