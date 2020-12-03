import { FILTER_ARTICLES } from "../constants/ActionTypes";

export function filterArticles(payload) {
  return { type: FILTER_ARTICLES, payload };
}
