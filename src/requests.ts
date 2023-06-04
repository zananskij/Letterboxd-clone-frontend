const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests

// const requests = {
//   fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
// }

// corresponding endpoints
// app.get("/trending", async (req, res) => {
//   const response = await Axios.get(requests.fetchTrending)
//   res.json(response.data)
// })
// app.get("/originals", async (req, res) => {
//   const response = await Axios.get(requests.fetchNetflixOriginals)
//   res.json(response.data)
// })
// app.get("/toprated", async (req, res) => {
//   const response = await Axios.get(requests.fetchTopRated)
//   res.json(response.data)
// })
// app.get("/action", async (req, res) => {
//   const response = await Axios.get(requests.fetchActionMovies)
//   res.json(response.data)
// })
// app.get("/comedy", async (req, res) => {
//   const response = await Axios.get(requests.fetchComedyMovies)
//   res.json(response.data)
// })
// app.get("/horror", async (req, res) => {
//   const response = await Axios.get(requests.fetchHorrorMovies)
//   res.json(response.data)
// })
// app.get("/romance", async (req, res) => {
//   const response = await Axios.get(requests.fetchRomanceMovies)
//   res.json(response.data)
// })
// app.get("/documentaries", async (req, res) => {
//   const response = await Axios.get(requests.fetchDocumentaries)
//   res.json(response.data)
// })
