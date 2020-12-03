import { ADD_ARTICLE } from "../constants/ActionTypes";
import { FILTER_ARTICLES } from "../constants/ActionTypes";
import { REMOVE_FILTER } from "../constants/ActionTypes";
import { SEARCH_TAG } from "../constants/ActionTypes";
import { REMOVE_SEARCH_TAG } from "../constants/ActionTypes";
const initialState = {
  articles: [],
};
function filter(articles, action) {
  for (var i = 0; i < articles.length; i++) {
    if (articles[i].postCategory === action.payload.value) {
      articles[i].postState = true;
    } else {
      articles[i].postState = false;
    }
  }

  return articles;
}
function removeFilter(articles, action) {
  for (var i = 0; i < articles.length; i++) {
    articles[i].postState = true;
  }
  return articles;
}
function searchTag(articles, action) {
  for (var i = 0; i < articles.length; i++) {
    if (articles[i].postTag.toUpperCase() == action.payload.tag.toUpperCase()) {
      articles[i].postStateTag = true;
    } else {
      articles[i].postStateTag = false;
    }
  }

  return articles;
}
function removeSearchTag(articles, action) {
  for (var i = 0; i < articles.length; i++) {
    articles[i].postStateTag = true;
  }
  return articles;
}
function articleReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: [action.payload].concat(state.articles),
    });
  } else if (action.type === FILTER_ARTICLES) {
    return Object.assign({}, state, {
      articles: filter(state.articles, action).concat([]),
    });
  } else if (action.type === REMOVE_FILTER) {
    return Object.assign({}, state, {
      articles: removeFilter(state.articles, action).concat([]),
    });
  } else if (action.type === SEARCH_TAG) {
    return Object.assign({}, state, {
      articles: searchTag(state.articles, action).concat([]),
    });
  } else if (action.type === REMOVE_SEARCH_TAG) {
    return Object.assign({}, state, {
      articles: removeSearchTag(state.articles, action).concat([]),
    });
  }

  return state;
}

export default articleReducer;
