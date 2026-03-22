'use client' //  client component
import { searchDatasets } from '../lib/searchengine'
import { useEffect, useState } from 'react'
export default function Home() { // State to hold the datasets and loading status

  const [datasets, setDatasets] = useState([]) // State to hold the datasets and loading status
  const [loading, setLoading] = useState(true) 

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
  const testResult = searchDatasets(datasets, "cov")
  console.log(testResult)

  return ( // Render the datasets in a table format HTML structure
    <main className="min-h-screen bg-white-500 p-8 text-slate-900">
      <h1 className="mb-4  w-full text-2xl font-semibold text-slate-900">HDRUK Datasets</h1>
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
          {testResult.map((dataset: any, index: number) => (
            <tr key={`${dataset?.id ?? 'row'}-${index}`}>
              <td className="border border-slate-200 p-3 align-top">{dataset.title}</td>
              <td className="border border-slate-200 p-3 align-top">{dataset.description}</td>
              <td className="border border-slate-200 p-3 align-top">{dataset.accessServiceCategory}</td>
              <td className="border border-slate-200 p-3 align-top max-w-xs break-words">{dataset.accessRights}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
