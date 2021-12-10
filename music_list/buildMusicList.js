function getMusicListElement() {
  const musicList = document.querySelector('.music-list')
  return musicList
}

function musicItemTemplate({ name, hasLearned }) {
  return (`
    <div class="music-template">
      <div class="has-learned-icon ${hasLearned ? 'has-learned' : 'has-not-learned'}">
        ${hasLearned ? '<i class="fas fa-check"></i>' : '<i></i>'}
      </div>
      <p class="music-name">${name}</p>
    </div>
  `)
}

function artistSectionTemplate(artist) {
  const alphabeticallyMusics = sortAlphabetically(artist.musics, 'name')

  return (`
    <section class="artist">
      <h3 class="artist-name">${artist.name}</h3>
      <div class="artist-musics">
        ${alphabeticallyMusics.map((music) => musicItemTemplate(music)).join('')}
      </div>
    </section>
  `)
}

function ascSorting(a, b) {
	if (a > b) {
    return 1
  }
    
  if (a < b) {
    return -1
  }
  
  return 0
}

function sortAlphabetically(array, propName) {
	const splitJoinToLowerCaseString = (string) => string.split(' ').join('').toLowerCase()

  const sortedArray = array.sort((itemA, itemB) => {
  	const newItemA = splitJoinToLowerCaseString(itemA[propName])
    const newItemB = splitJoinToLowerCaseString(itemB[propName])
    
    return ascSorting(newItemA, newItemB)
  })

	return sortedArray
}

function attachArtistToMusicList() {
  const alphabeticallySortedArtists = sortAlphabetically(ARTISTS, 'name')
  const newArtistList = alphabeticallySortedArtists.map(artistSectionTemplate)
  const listElement = getMusicListElement()

  listElement.innerHTML = newArtistList.join('')
}

attachArtistToMusicList()