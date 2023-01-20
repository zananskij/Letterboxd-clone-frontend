import React from "react"
import { MediaData } from "../results"

interface CategoryProps {
  title: string
  data: { page: number; data: MediaData[] }
  render: (item: MediaData) => JSX.Element
}

const CategoryContainer = ({ title, data, render }: CategoryProps) => {
  return (
    <>
      <h2 className="row-title" style={{ position: "absolute" }}>
        {title}
      </h2>
      <div className="media-scroller grid grid-flow-col pt-7" style={{ overflowX: "scroll", position: "relative" }}>
        {data.data.map(render)}
      </div>
    </>
  )
}

export default CategoryContainer
