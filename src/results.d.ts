// interface Trending {
//   trending: {
//     page: number
//     results: Array<{
//       adult: boolean
//       backdrop_path: string
//       first_air_date?: string
//       release_date?: string
//       video?: boolean
//       genre_ids: number[]
//       id: number
//       media_type: string
//       name?: string
//       title?: string
//       origin_country: string[]
//       original_language: string
//       original_name: string
//       original_title?: string
//       overview: string
//       popularity: number
//       poster_path: string
//       vote_average: number
//       vote_count: number
//     }>
//   }
// }
// interface netflixOriginals {
//   netflixOriginals: {
//     page: number
//     results: Array<{
//       adult: boolean
//       backdrop_path: string
//       first_air_date?: string
//       release_date?: string
//       video?: boolean
//       genre_ids: number[]
//       id: number
//       media_type: string
//       name?: string
//       title?: string
//       origin_country: string[]
//       original_language: string
//       original_name: string
//       original_title?: string
//       overview: string
//       popularity: number
//       poster_path: string
//       vote_average: number
//       vote_count: number
//     }>
//   }
// }
// interface Horror {
//   horror: {
//     page: number
//     results: Array<{
//       adult: boolean
//       backdrop_path: string
//       first_air_date?: string
//       release_date?: string
//       video?: boolean
//       genre_ids: number[]
//       id: number
//       media_type: string
//       name?: string
//       title?: string
//       origin_country: string[]
//       original_language: string
//       original_name: string
//       original_title?: string
//       overview: string
//       popularity: number
//       poster_path: string
//       vote_average: number
//       vote_count: number
//     }>
//   }
// }

// v2
// export interface MovieData {
//   trending: {
//     page: number
//     results: Array<{
//       adult: boolean
//       backdrop_path: string
//       first_air_date?: string
//       release_date?: string
//       video?: boolean
//       genre_ids: number[]
//       id: number
//       media_type: string
//       name?: string
//       title?: string
//       origin_country: string[]
//       original_language: string
//       original_name: string
//       original_title?: string
//       overview: string
//       popularity: number
//       poster_path: string
//       vote_average: number
//       vote_count: number
//     }>
//   }
//   netflixOriginals: {
//     page: number
//     results: Array<{
//       adult: boolean
//       backdrop_path: string
//       first_air_date?: string
//       release_date?: string
//       video?: boolean
//       genre_ids: number[]
//       id: number
//       media_type: string
//       name?: string
//       title?: string
//       origin_country: string[]
//       original_language: string
//       original_name: string
//       original_title?: string
//       overview: string
//       popularity: number
//       poster_path: string
//       vote_average: number
//       vote_count: number
//     }>
//   }
//   horror: {
//     page: number
//     results: Array<{
//       adult: boolean
//       backdrop_path: string
//       first_air_date?: string
//       release_date?: string
//       video?: boolean
//       genre_ids: number[]
//       id: number
//       media_type: string
//       name?: string
//       title?: string
//       origin_country: string[]
//       original_language: string
//       original_name: string
//       original_title?: string
//       overview: string
//       popularity: number
//       poster_path: string
//       vote_average: number
//       vote_count: number
//     }>
//   }
// }

// export interface Props {
//   title: string
//   data: {
//     page: number
//     results: Array<{
//       adult: boolean
//       backdrop_path: string
//       first_air_date?: string
//       release_date?: string
//       video?: boolean
//       genre_ids: number[]
//       id: number
//       media_type: string
//       name?: string
//       title?: string
//       origin_country: string[]
//       original_language: string
//       original_name: string
//       original_title?: string
//       overview: string
//       popularity: number
//       poster_path: string
//       vote_average: number
//       vote_count: number
//     }>
//   }
//   render: (item: any) => JSX.Element
// }

// export interface Data {
//   data: {
//     page: number
//     results: Array<{
//       adult: boolean
//       backdrop_path: string
//       first_air_date?: string
//       release_date?: string
//       video?: boolean
//       genre_ids: number[]
//       id: number
//       media_type: string
//       name?: string
//       title?: string
//       origin_country: string[]
//       original_language: string
//       original_name: string
//       original_title?: string
//       overview: string
//       popularity: number
//       poster_path: string
//       vote_average: number
//       vote_count: number
//     }>
//   }
// }

// v3
// updated defintions

export interface MediaCategory {
  trending: {
    page: number
    data: MediaData[]
  }
  netflixOriginals: {
    page: number
    data: MediaData[]
  }
  topRated: {
    page: number
    data: MediaData[]
  }
  horror: {
    page: number
    data: MediaData[]
  }
  comedy: {
    page: number
    data: MediaData[]
  }
  action: {
    page: number
    data: MediaData[]
  }
  documentaries: {
    page: number
    data: MediaData[]
  }
}

export interface MediaData {
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
}

// Movie = MediaData
