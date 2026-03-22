export type SearchableDataset = {
  title?: string
}

export function searchDatasets(datasets: SearchableDataset[], search: string) {
  const normalizedSearch = search.toLowerCase().trim()

  if (!normalizedSearch) {
    return datasets
  }

  return datasets.filter((dataset) =>
    (dataset.title ?? '').toLowerCase().includes(normalizedSearch)
  )
}
