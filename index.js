const express = require('express')
const { getAllTeams, getTeamById } = require('./controller/teamsController')


const app = express()

app.get('/', getAllTeams)

app.get('/:id', getTeamById)


app.listen(2011, () => {
  console.log('Listening on port 2011...') // eslint-disable-line no-console
})
