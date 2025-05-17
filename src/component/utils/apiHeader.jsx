export const APIOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+ process.env.REACT_APP_tmdb_Api 
  }
};