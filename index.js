import { fetchAllPlayers } from './ajaxHelpers'
import { renderAllPlayers, renderNewPlayerForm } from './renderHelpers'

const init = async () => {
  const players = await fetchAllPlayers()
  renderAllPlayers(players)

  renderNewPlayerForm()
}

fetch(URL, options)

init()

event.preventDefault();

let playerData = {
  name: form.elements.name.value,
  breed: form.elements.breed.value
}