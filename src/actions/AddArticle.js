import { ADD_ARTICLE } from "../constants/ActionTypes";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
