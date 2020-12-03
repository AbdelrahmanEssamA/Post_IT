import { REMOVE_FILTER } from "../constants/ActionTypes";

export function removeFilter(payload) {
  return { type: REMOVE_FILTER, payload };
}
