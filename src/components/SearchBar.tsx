import React, { useEffect, useState } from "react"
import axios from "axios"
import Modal from "./Modal"

interface SearchResult {
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
  trailerUrl: string | null
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [selectedMovie, setSelectedMovie] = useState<SearchResult | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  //   allows search divs to be close when clicking outside
  const searchResultsRef = React.useRef<HTMLDivElement | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await axios.get(`http://localhost:8000/search/${searchTerm}`)
      const results = response.data.results
      results.sort((a: SearchResult, b: SearchResult) => b.popularity - a.popularity)
      const topResults = results.slice(0, 5)
      setSearchResults(topResults)
    } catch (error) {
      console.error(error)
    }
  }
  const handleSelectMedia = (movie: SearchResult) => {
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target as Node)) {
        setSearchResults([])
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults([])
    }
  }, [searchTerm])

  const imageUrlBase = "https://image.tmdb.org/t/p/w500/"

  return (
    <div className="relative search-input">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="h-8 rounded-md ml-0 px-2 py-1 text-sm search-input-field"
        />

        <button type="submit" className="ml-2 bg-blue-500 rounded-md hover:bg-green-600 text-white px-2 py-1 text-sm">
          Search
        </button>
      </form>
      {searchResults.length > 0 && (
        <div
          ref={searchResultsRef}
          className="absolute top-full w-full bg-gray-300 text-black mt-2 rounded-md shadow-lg p-1"
        >
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="flex items-center border-b border-gray-200 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectMedia(result)}
            >
              <img src={`${imageUrlBase}${result.poster_path}`} alt={result.title} className="w-16 h-16 mr-4" />
              <div>
                <h2 className="font-bold">{result.title}</h2>
                <p>Released Date: {result.first_air_date || result.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && selectedMovie && <Modal movie={selectedMovie} handleClose={handleCloseModal} />}
    </div>
  )
}

export default SearchBar
