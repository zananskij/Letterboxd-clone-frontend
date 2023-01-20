import React from "react"

import CategoryContainer from "./CategoryContainer"
import Row from "./Row"
import Banner from "./Banner"
import { MediaCategory } from "../results"

const Main = ({ Data }: { Data: MediaCategory }) => {
  return (
    <>
      <Banner Data={Data} />
      <CategoryContainer title="Trending Now" data={Data.trending} render={(item) => <Row item={item} />} />
      <CategoryContainer
        title="Netflix Originals"
        data={Data.netflixOriginals}
        render={(item) => <Row item={item} />}
      />
      <CategoryContainer title="Horror" data={Data.horror} render={(item) => <Row item={item} />} />
    </>
  )
}
export default Main
// {
//   /* <CategoryContainer
//         title="Netflix Originals"
//         data={Data.netflixOriginals}
//         render={(item) => (
//           <Row
//             key={item.id}
//             id={item.id}
//             name={item.name}
//             title="Netflix Originals"
//             backdrop_path={item.backdrop_path}
//             poster_path={item.poster_path}
//           />
//         )}
//       />
//       <CategoryContainer
//         title="Horror"
//         data={Data.horror}
//         render={(item) => (
//           <Row
//             key={item.id}
//             id={item.id}
//             name={item.name}
//             title="Horror"
//             backdrop_path={item.backdrop_path}
//             poster_path={item.poster_path}
//           />
//         )}
//       /> */
// }

// interface Props {
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

// key={item.id}
// id={item.id}
// name={item.name}
// title="Trending Now"
// backdrop_path={item.backdrop_path}
// poster_path={item.poster_path}
