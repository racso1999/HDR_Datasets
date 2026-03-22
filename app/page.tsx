'use client' //  client component
import { searchDatasets } from '../lib/searchengine'
import { useEffect, useState } from 'react'
export default function Home() { // State to hold the datasets and loading status

  const [datasets, setDatasets] = useState([]) // State to hold the datasets and loading status
  const [loading, setLoading] = useState(true) 
  
  const [search, setSearch] = useState('') // State to hold the search query

  useEffect(() => {
    const fetchData = async () => { // Fetch data from the API route
      const response = await fetch('/api/datasets')
      const data = await response.json()
      setDatasets(data)
      setLoading(false)
    }

    fetchData() // Call the fetch function
  }, []) 

  if (loading) { // Show loading state while fetching data
    return <div>Fetching Data...</div>
  }
  const filteredDatasets = searchDatasets(datasets, search) // Filter datasets based on search query
  

  return ( // Render the datasets in a table format HTML structure
    
    <main className="min-h-screen bg-white-500 p-8 text-slate-900">
      <input className="mb-4 w-full rounded border border-slate-200 p-2"
        type="text"
        placeholder="Search HDR UK datasets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Wrap table in a horizontal scroll container so columns remain usable on smaller screens. */}
      <div className="overflow-x-auto">
        <table className="w-full border border-slate-200 bg-white text-sm text-slate-900">
          <thead>
            <tr className="bg-slate-100 text-slate-800">
              <th className="border border-slate-200 p-3 text-left">Title</th>
              <th className="border border-slate-200 p-3 text-left">Description</th>
              <th className="border border-slate-200 p-3 text-left">Access Category</th>
              <th className="border border-slate-200 p-3 text-left">Accesss Rights</th>
            </tr>
          </thead>
          <tbody>
            {filteredDatasets.map((dataset: any, index: number) => (
              <tr key={`${dataset?.id ?? 'row'}-${index}`}>
                <td className="border border-slate-200 p-3 align-top">{dataset.title}</td>
                <td className="border border-slate-200 p-3 align-top">{dataset.description}</td>
                <td className="border border-slate-200 p-3 align-top">{dataset.accessServiceCategory}</td>
                <td className="border border-slate-200 p-3 align-top max-w-xs break-words">{dataset.accessRights}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
