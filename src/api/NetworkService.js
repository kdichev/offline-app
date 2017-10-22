import RequestService from './RequestService';

const BASE_URL = 'https://api.nytimes.com/svc';
const API_KEY = '?api-key=5d7655c00bbe405d91d40c2abac95a20';

export const getArticles = () => {
  var url = `${BASE_URL}/search/v2/articlesearch.json${API_KEY}`
  return RequestService.getRequest(url)
}

export const getTopStories = () =>{
  var url = `${BASE_URL}/topstories/v2/technology.json${API_KEY}`
  return RequestService.getRequest(url)
}
