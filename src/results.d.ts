// export interface Genre {
//   id: number
//   name: string
// }

// export interface Movie {
//   adult: boolean
//   backdrop_path: string
//   genre_ids: number[]
//   id: number
//   original_language: string
//   original_title: string
//   overview: string
//   popularity: number
//   poster_path: string
//   release_date?: string
//   title: string
//   video: boolean
//   vote_average: number
//   vote_count: number
// }

export interface MovieData {
  trending: {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      first_air_date?: string
      release_date?: string
      video?: boolean
      genre_ids: number[]
      id: number
      media_type: string
      name?: string
      title?: string
      origin_country: string[]
      original_language: string
      original_name: string
      original_title?: string
      overview: string
      popularity: number
      poster_path: string
      vote_average: number
      vote_count: number
    }>
  }
  netflixOriginals: {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      first_air_date?: string
      release_date?: string
      video?: boolean
      genre_ids: number[]
      id: number
      media_type: string
      name?: string
      title?: string
      origin_country: string[]
      original_language: string
      original_name: string
      original_title?: string
      overview: string
      popularity: number
      poster_path: string
      vote_average: number
      vote_count: number
    }>
  }
  horror: {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      first_air_date?: string
      release_date?: string
      video?: boolean
      genre_ids: number[]
      id: number
      media_type: string
      name?: string
      title?: string
      origin_country: string[]
      original_language: string
      original_name: string
      original_title?: string
      overview: string
      popularity: number
      poster_path: string
      vote_average: number
      vote_count: number
    }>
  }
}
