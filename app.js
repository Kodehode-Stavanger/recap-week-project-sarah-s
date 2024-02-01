import { topSellers } from './assets/resorces/topSellers.js'

const gamesList = document.createElement('ol')
gamesList.className = 'list-Container'
document.body.append(gamesList)

topSellers.forEach((item) => {
	const gameElem = document.createElement('li')
	const gameLogo = document.createElement('img')
	const gameTitle = document.createElement('h2')
	const gameDeveloper = document.createElement('h3')
	const gamePlatforms = document.createElement('p')
	const gameCategories = document.createElement('p')
	const gameReleaseYear = document.createElement('p')
	const gameDescription = document.createElement('p')

	gameLogo.className = 'game-logo'
	gameTitle.className = 'game-title'
	gameElem.className = 'game-container'
	gameDeveloper.className = 'game-developer'
	gamePlatforms.className = 'game-platforms'
	gameCategories.className = 'game-categories'
	gameReleaseYear.className = 'game-releaseYear'
	gameDescription.className = 'game-description'

	gameTitle.textContent = item.title
	gameDeveloper.textContent = item.developer
	gameReleaseYear.textContent = item.releaseYear
	gameDescription.textContent = item.description
	gameLogo.src = `assets/images/logos/${item.logo}`
	gamePlatforms.textContent = item.platforms.join(' , ')
	gameCategories.textContent = `#${item.categories.join(' #')}`

	gameElem.append(gameTitle, gameDeveloper, gameReleaseYear, gameCategories, gameDescription, gamePlatforms, gameLogo)
	gamesList.append(gameElem)
})
