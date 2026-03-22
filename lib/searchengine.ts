export type SearchableDataset = {
  title?: string
}

export function searchDatasets(datasets: SearchableDataset[], search: string) { // Function to filter datasets based on search query
  const normalizedSearch = search.toLowerCase().trim()

  if (!normalizedSearch) {
    return datasets
  }

  const searchTerms = normalizedSearch.split(/\s+/).filter(Boolean) // Split search query into individual terms.filter out empty terms

  return datasets.filter((dataset) => {
    const normalizedTitle = (dataset.title ?? '').toLowerCase()
    return searchTerms.every((term) => normalizedTitle.includes(term))
  })
}
