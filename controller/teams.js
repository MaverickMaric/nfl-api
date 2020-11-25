const teams = require('../teams')

/* '..' to move up a folder (teams.js is in root dir, teamsController.js 
is in controller folder, need to go up a level for teamsController to 
access teams.js) */

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamById = (request, response) => {
  const { id } = request.params

  const foundTeam = teams.filter((teamNum) => teamNum.id === parseInt(id))

  return response.send(foundTeam)
}

const saveNewTeam = (request, response) => {
  const { id, location, mascot, abbreviation, conference, division } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    // eslint-disable-next-line max-len
    return response.status(400).send('The following fields are required: location, mascot, abbreviation, conference, division')
  }
  const newTeam = { id, location, mascot, abbreviation, conference, division }

  teams.push(newTeam)

  return response.status(201).send(newTeam)
}

module.exports = { getAllTeams, getTeamById, saveNewTeam }
