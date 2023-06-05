import React from "react"
import Row from "./Row"
import Card from "./Card"
import { MediaData } from "../results"

interface Props {
  watchLaterData: MediaData[]
}

const WatchLater: React.FC<Props> = ({ watchLaterData }) => {
  console.log("Rendered Watch Later Media:", watchLaterData)
  return <Row title="Watch Later" data={{ page: 1, data: watchLaterData }} render={(item) => <Card item={item} />} />
}

export default WatchLater
