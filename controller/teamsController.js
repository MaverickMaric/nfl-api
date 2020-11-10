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

module.exports = { getAllTeams, getTeamById }
