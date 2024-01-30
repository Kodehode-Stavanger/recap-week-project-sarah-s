import { topSellers } from './resorces/topSellers.js'

const gamesPostersContainer = document.getElementById('games-posters-container')
const gamesList = document.createElement('ol')

gamesPostersContainer.append(gamesList)
document.body.append(gamesPostersContainer)

topSellers.forEach((item) => {
	const gameElem = document.createElement('li')
	const gameLogo = document.createElement('img')
	const gameTitle = document.createElement('h2')
	const gameDeveloper = document.createElement('h3')
	const gamePlatforms = document.createElement('p')
	const gameCategories = document.createElement('p')
	const gameReleaseYear = document.createElement('p')
	const gameDescription = document.createElement('p')

	gameLogo.className = 'icons-class'
	gameTitle.className = 'game-title'
	gameElem.className = 'game-container'
	gameDeveloper.className = 'game-Developer'
	gamePlatforms.className = 'game-Platforms'
	gameCategories.className = 'game-Categories'
	gameReleaseYear.className = 'game-ReleaseYear'
	gameDescription.className = 'game-Description'

	gameTitle.textContent = item.title
	gameLogo.src = `logos/${item.logo}`
	gameDeveloper.textContent = item.developer
	gameReleaseYear.textContent = item.releaseYear
	gameDescription.textContent = item.description
	gamePlatforms.textContent = item.platforms.join(' , ')
	gameCategories.textContent = `#${item.categories.join(' #')}`

	gameElem.append(gameTitle, gameDeveloper, gameReleaseYear, gameCategories, gameDescription, gamePlatforms, gameLogo)
	gamesList.append(gameElem)
})
