'use strict'
// מטלה 1
// לצורך המשימה תצטרכו להשתמש בJSON הבא:
// https://api.npoint.io/fa393fa40840f5dc89a1

// אנא צרו דף HTML שלם (לא חייב להיות מעוצב) מאפס, ומשכו את הJSON ובנו לפיו קישורים, לפי הצבע המתאים (נמצא בJSON).
// אסור להשתמש בסיפריות למעט jQuery, אך לא חובה
// בהצלחה!

const LINKS_STORAGE_KEY = 'linksCache'

const linksCache = loadFromStorage(LINKS_STORAGE_KEY) || null

function getLinks() {
    console.log(`linksCache:`, linksCache)
    if (linksCache) {
        console.log('No need to fetch, retrieving from Cache')
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