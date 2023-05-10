'use strict'

const LINKS_STORAGE_KEY = 'linksCache'

const linksCache = loadFromStorage(LINKS_STORAGE_KEY) || null

function getLinks() {
    if (linksCache) {
        // No need to fetch, retrieving from Cache
        return Promise.resolve(linksCache)
    }

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    const LINKS_API_URL = 'https://api.npoint.io/fa393fa40840f5dc89a1'

    return fetch(LINKS_API_URL, requestOptions)
        .then(res => res.json())
        .then(links => {
            saveToStorage(LINKS_STORAGE_KEY, links)
            return links
        })
        .catch(error => console.error(error))

}