'use client' // This is a client component
import { useEffect, useState } from 'react'
export default function Home() { // State to hold the datasets and loading status

  const [datasets, setDatasets] = useState([])  
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

  return ( // Render the datasets in a table format HTML structure
    <main>
      <h1>HDR UK Datasets</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Access Category</th>
            <th>Access Rights</th>
          </tr>
        </thead>
        <tbody>
          {datasets.map((dataset: any, index: number) => (
            <tr key={index}>
              <td>{dataset.title}</td>
              <td>{dataset.description}</td>
              <td>{dataset.accessServiceCategory}</td>
              <td>{dataset.accessRights}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

