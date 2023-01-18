import React from "react"

interface Props {
  title: string
  data: {
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
  render: (item: any) => JSX.Element
}

const CategoryContainer = ({ title, data, render }: Props) => {
  return (
    <>
      <h2 className="row-title" style={{ position: "absolute" }}>
        {title}
      </h2>
      <div className="media-scroller grid grid-flow-col pt-7" style={{ overflowX: "scroll", position: "relative" }}>
        {data.results.map(render)}
      </div>
    </>
  )
}

export default CategoryContainer
