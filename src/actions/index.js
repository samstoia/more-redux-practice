import { ADD_ARTICLE } from "../constants/action-types";


export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

// export function deleteArticle(title) {
//   return { type: DELETE_ARTICLE, title }
// }