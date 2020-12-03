import { REMOVE_SEARCH_TAG } from "../constants/ActionTypes";

export function removeSearchTag(payload) {
  return { type: REMOVE_SEARCH_TAG, payload };
}
