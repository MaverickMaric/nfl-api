const express = require('express')
const bodyParser = require('body-parser')
const { getAllTeams, getTeamById, saveNewTeam } = require('./controller/teams')


const app = express()

app.get('/', getAllTeams)

app.get('/:id', getTeamById)

app.post('/', bodyParser.json(), saveNewTeam)


app.listen(2011, () => {
  console.log('Listening on port 2011...') // eslint-disable-line no-console
})
