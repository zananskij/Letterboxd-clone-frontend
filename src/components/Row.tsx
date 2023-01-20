import React from "react"
import { MediaData } from "../results"

interface CategoryProps {
  title: string
  data: { page: number; data: MediaData[] }
  render: (item: MediaData) => JSX.Element
}

const Row = ({ title, data, render }: CategoryProps) => {
  return (
    <>
      <div className="h-50 pt-5 pl-4">
        <h2 className="row-title" style={{ position: "absolute" }}>
          {title}
        </h2>
        <div
          className="media-scroller scrollbar-hide grid grid-flow-col pt-7"
          style={{ overflowX: "scroll", position: "relative" }}
        >
          {data.data.map(render)}
        </div>
      </div>
    </>
  )
}

export default Row
