import { NextResponse } from 'next/server' 

const DATA_URL = 'https://raw.githubusercontent.com/HDRUK/hackathon-entity-linkage/refs/heads/dev/fe-implement/app/data/all_datasets.json'

export async function GET() { // Fetch the dataset information from the provided URL
    const response = await fetch(DATA_URL) 
    const data = await response.json() //parse the response as JSON

    const datasets = data.map((dataset: any) => ({ // Extract relevant fields from the dataset and return in structured format
        id: dataset?.id,
        title: dataset?.metadata?.summary?.title,
        description: dataset?.metadata?.summary?.description,
        accessServiceCategory: dataset?.metadata?.accessibility?.access?.accessServiceCategory,
        accessRights: dataset?.metadata?.accessibility?.access?.accessRights,
    }))
// added ? for null exception handling in case any of the fields are missing in the dataset
    return NextResponse.json(datasets)
}
