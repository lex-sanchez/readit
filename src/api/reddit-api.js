const axios = require('axios');
const BASE_URL = 'http://localhost:3001/api';

export const getSubredditData = async subreddit => {
  const response = await axios.get(`${BASE_URL}/reddit`);
  console.log(response.data);
  return response.data;
};