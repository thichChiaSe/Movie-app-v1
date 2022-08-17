const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4614c1ae65aa9aa76faec4dc964404c6",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
