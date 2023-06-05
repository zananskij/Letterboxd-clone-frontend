import React, { useEffect, useState } from "react"
import axios from "axios"

interface SearchResult {
  title: string
  id: number
  popularity: number
  backdrop_path: string | null
  poster_path: string | null
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

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

  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults([])
    }
  }, [searchTerm])

  const imageUrlBase = "https://image.tmdb.org/t/p/w500/"

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input type="text" value={searchTerm} onChange={handleChange} className="rounded-md px-2 py-1 text-sm" />
        <button type="submit" className="ml-2 bg-blue-500 rounded-md text-white px-2 py-1 text-sm">
          Search
        </button>
      </form>
      {searchResults.length > 0 && (
        <div className="absolute top-full w-full bg-gray-300 text-black mt-2 rounded-md shadow-lg p-4">
          {searchResults.map((result) => (
            <div key={result.id} className="flex items-center border-b border-gray-200 p-2 hover:bg-gray-100">
              <img src={`${imageUrlBase}${result.poster_path}`} alt={result.title} className="w-16 h-16 mr-4" />
              <div>
                <h2 className="font-bold">{result.title}</h2>
                <p>Popularity: {result.popularity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
