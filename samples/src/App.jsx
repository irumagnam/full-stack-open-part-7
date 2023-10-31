import ReactDOM from 'react-dom/client'
import { useEffect, useState } from 'react'
import {
  Container,
  Table,
  Paper,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Alert
} from '@mui/material'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
  useMatch
} from 'react-router-dom'

const App = () => {

  const teams = [
    { id: 'AFG', name: 'Afghanistan', logo: '' },
    { id: 'AUS', name: 'Australia', logo: '' },
    { id: 'BAN', name: 'Bangladesh', logo: '' },
    { id: 'ENG', name: 'England', logo: '' },
    { id: 'IND', name: 'India', logo: '' },
    { id: 'NED', name: 'Nederlands', logo: '' },
    { id: 'NZ', name: 'New Zealand', logo: '' },
    { id: 'PAK', name: 'Pakistan', logo: '' },
    { id: 'SA', name: 'South Africa', logo: '' },
    { id: 'SL', name: 'Sri Lanka', logo: '' },
  ]

  const initialMatches = [
    { id: 0, d: '2023-10-05', t1: 'ENG', t2: 'NZ', r: ['NZ'] },
    { id: 1, d: '2023-10-06', t1: 'PAK', t2: 'NED', r: ['PAK'] },
    { id: 2, d: '2023-10-06', t1: 'AFG', t2: 'BAN', r: ['BAN'] },
    { id: 3, d: '2023-10-07', t1: 'SA', t2: 'SL', r: ['SA'] },
    { id: 4, d: '2023-10-08', t1: 'AUS', t2: 'IND', r: ['IND'] },
    { id: 5, d: '2023-10-09', t1: 'NZ', t2: 'NED', r: ['NZ'] },
    { id: 6, d: '2023-10-09', t1: 'ENG', t2: 'BAN', r: ['ENG'] },
    { id: 7, d: '2023-10-10', t1: 'SL', t2: 'PAK', r: ['PAK'] },
    { id: 8, d: '2023-10-11', t1: 'IND', t2: 'AFG', r: ['IND'] },
    { id: 9, d: '2023-10-12', t1: 'SA', t2: 'AUS', r: ['SA'] },
    { id: 10, d: '2023-10-13', t1: 'NZ', t2: 'BAN', r: ['NZ'] },
    { id: 11, d: '2023-10-14', t1: 'IND', t2: 'PAK', r: ['IND'] },
    { id: 12, d: '2023-10-15', t1: 'AFG', t2: 'ENG', r: ['AFG'] },
    { id: 13, d: '2023-10-16', t1: 'AUS', t2: 'SL', r: ['AUS'] },
    { id: 14, d: '2023-10-17', t1: 'SA', t2: 'NED', r: ['NED'] },
    { id: 15, d: '2023-10-18', t1: 'NZ', t2: 'AFG', r: ['NZ'] },
    { id: 16, d: '2023-10-19', t1: 'IND', t2: 'BAN', r: ['IND'] },
    { id: 17, d: '2023-10-20', t1: 'AUS', t2: 'PAK', r: ['AUS'] },
    { id: 18, d: '2023-10-20', t1: 'NED', t2: 'SL', r: ['SL'] },
    { id: 19, d: '2023-10-21', t1: 'SA', t2: 'ENG', r: ['SA'] },
    { id: 20, d: '2023-10-22', t1: 'IND', t2: 'NZ', r: ['IND'] },
    { id: 21, d: '2023-10-23', t1: 'AFG', t2: 'PAK', r: ['AFG'] },
    { id: 22, d: '2023-10-24', t1: 'SA', t2: 'BAN', r: ['SA'] },
    { id: 23, d: '2023-10-25', t1: 'AUS', t2: 'NED', r: ['AUS'] },
    { id: 24, d: '2023-10-26', t1: 'ENG', t2: 'SL', r: ['SL'] },
    { id: 25, d: '2023-10-27', t1: 'SA', t2: 'PAK', r: ['SA'] },
    { id: 26, d: '2023-10-27', t1: 'AUS', t2: 'NZ', r: ['AUS'] },
    { id: 27, d: '2023-10-28', t1: 'NED', t2: 'BAN', r: ['NED'] },
    { id: 28, d: '2023-10-29', t1: 'IND', t2: 'ENG', r: ['IND'] },
    { id: 29, d: '2023-10-30', t1: 'AFG', t2: 'SL', r: ['AFG'] },
    { id: 30, d: '2023-10-31', t1: 'BAN', t2: 'PAK', r: [] },
    { id: 31, d: '2023-11-01', t1: 'SA', t2: 'NZ', r: [] },
    { id: 32, d: '2023-11-02', t1: 'IND', t2: 'SL', r: [] },
    { id: 33, d: '2023-11-03', t1: 'AFG', t2: 'NED', r: [] },
    { id: 34, d: '2023-11-03', t1: 'NZ', t2: 'PAK', r: [] },
    { id: 35, d: '2023-11-04', t1: 'AUS', t2: 'ENG', r: [] },
    { id: 36, d: '2023-11-05', t1: 'IND', t2: 'SA', r: [] },
    { id: 37, d: '2023-11-06', t1: 'BAN', t2: 'SL', r: [] },
    { id: 38, d: '2023-11-07', t1: 'AUS', t2: 'AFG', r: [] },
    { id: 39, d: '2023-11-08', t1: 'ENG', t2: 'NED', r: [] },
    { id: 40, d: '2023-11-09', t1: 'NZ', t2: 'SL', r: [] },
    { id: 41, d: '2023-11-10', t1: 'SA', t2: 'AFG', r: [] },
    { id: 42, d: '2023-11-10', t1: 'AUS', t2: 'BAN', r: [] },
    { id: 43, d: '2023-11-11', t1: 'ENG', t2: 'PAK', r: [] },
    { id: 44, d: '2023-11-12', t1: 'IND', t2: 'NED', r: [] },
  ]

  const [matches, setMatches] = useState(initialMatches)
  const [points, setPoints] = useState({})

  useEffect(() => {
    setPoints(caculatePoints(matches))
  }, [matches])

  const simulateTop4Scenarios = (teamID) => {
    const newMatches = [...matches] //matches.map(m => (m.r.length === 0 && (m.t1 === teamID || m.t2 === teamID)) ? { ...m, r:[teamID] } : m)
    const remainingMatches = newMatches.filter(match => match.r.length === 0)
    let top4Scenarios = 0
    let totalScenarios = 0
    let scenarioList = []

    // Generate all possible outcomes for remaining matches (3^n scenarios)
    const outcomes = ['W', 'L']
    const scenarios = []
    for (let i = 0; i < Math.pow(outcomes.length, remainingMatches.length); i++) {
      scenarios.push(i.toString(outcomes.length).padStart(remainingMatches.length, '0'))
    }

    // Run each scenario
    for (const scenario of scenarios) {
      totalScenarios++
      const simulatedPoints = caculatePoints(newMatches)
      const scenarioDetails = []

      // Simulate each match in the scenario
      for (let i = 0; i < remainingMatches.length; i++) {
        const { d, t1, t2 } = remainingMatches[i]
        const outcome = scenario[i]

        if (outcome === '0') {
          simulatedPoints[t1] += 2
          scenarioDetails.push({ ...remainingMatches[i], r: [t1] })
        } else if (outcome === '1') {
          simulatedPoints[t2] += 2
          scenarioDetails.push({ ...remainingMatches[i], r: [t2] })
        } else {
          simulatedPoints[t1] += 1
          simulatedPoints[t2] += 1
          scenarioDetails.push({ ...remainingMatches[i], r: [t1, t2] })
        }
      }

      // Check if team ends in top 4
      const sortedTeams = Object.keys(simulatedPoints).sort((a, b) => {
        if (simulatedPoints[b] !== simulatedPoints[a]) {
          return simulatedPoints[b] - simulatedPoints[a]
        } else {
          return a.localeCompare(b)
        }
      })

      const top4Teams = []
      for(let i=0; i<4; i++) {
        top4Teams.push(`${sortedTeams[i]}: ${simulatedPoints[sortedTeams[i]]}`)
      }

      if (sortedTeams.indexOf(teamID) < 4) {
        top4Scenarios++
        if (scenarioList.length < 1 ) {
          scenarioList.push(scenarioDetails)
        }
        //console.log(`Top4: ${top4Teams.join(', ')}`)
        //console.log(`Scenario #${totalScenarios} (Team in Top 4):`)
        //console.log(scenarioDetails.join('\n'))
      } else {
        //console.log(`Scenario #${totalScenarios}:`)
        //console.log(scenarioDetails.join('\n'))
      }
    }

    //console.log(`The team ${teamID} ends in the top 4 in ${top4Scenarios} out of ${totalScenarios} scenarios.`)
    return { top4Scenarios, totalScenarios, scenarioList }
  }

  const caculatePoints = (matches) => {
    const points = {}

    // initialize each team's points to 0
    teams.forEach((team) => {
      points[team.id] = 0
    })

    // calculate points
    matches.forEach((match) => {
      const { t1, t2, r } = match

      if (r.length === 2) {
        // It's a tie, award 1 point to each team
        points[t1] += 1
        points[t2] += 1
      } else if (r.length === 1) {
        // There's a winner, award 2 points to the winner
        if (r[0] === t1) {
          points[t1] += 2
        } else if (r[0] === t2) {
          points[t2] += 2
        }
      }
    })

    return points
  }

  // sort teams by total points
  const sortedTeams = teams.sort((a, b) =>
    points[b.id] - points[a.id]
  )

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  }

  // find the status of a match for a given team
  const getResult = (team, match) => {
    if (match.r.length === 2) {
      return 'T'
    } else if (match.r.length === 1) {
      return match.r[0] === team.id ? 'W' : 'L'
    }

    return 'N'
  }

  const updateResult = (team, match, result) => {
    let r = []
    switch(result) {
      case 'W':
        r = [team.id]
        break
      case 'L':
        r = [match.t1 === team.id ? match.t2 : match.t1]
        break
      case 'T':
        r = [match.t1, match.t2]
        break
      case 'N':
        r = []
    }
    const updatedMatches = matches.map(m =>
      m.id === match.id ? { ...m, r } : m
    )
    setMatches(updatedMatches)
  }

  const Summary = ({ reset }) => {
    const [scenarios, setScenarios] = useState([])
    const showScenarios = (scenarioList) => {
      setScenarios(scenarioList)
    }
    const tryScenario = (scenario) => {
      const newMatches = matches.map(m => {
        const newMatch = scenario.find(s => s.id === m.id)
        return newMatch ? newMatch : m
      })
      setMatches(newMatches)
    }
    return (
      <div>
        <h2>ICC Cricket Worldcup 2023 - Match Simulator</h2>
        <div style={{ display: 'flex', gap: 10 }}>Legend: 
          <div className='result-W label'>&nbsp;</div>Win
          <div className='result-L label'>&nbsp;</div>Loss
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                {teams.map((team, i) => (
                  <TableCell key={team.id}>
                    {i === 0 ? 'Team' : i}
                  </TableCell>
                ))}
                <TableCell>
                  <div>Playoff Probability</div>
                  <Button variant='contained' onClick={() => reset()}>
                    Reset
                  </Button>
                </TableCell>
              </TableRow>
              {sortedTeams.map((team, i) => (
                <TeamRow key={team.id} team={team} showScenarios={showScenarios}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {scenarios.map((s,i) =>
          <div className='floater' key={i}>
            <Button variant='contained' onClick={() => tryScenario(s)}>
              Try this
            </Button>
            <Button color='secondary' variant='contained' onClick={() => setScenarios([])}>
              Close
            </Button>
            <ul>
              {s.map((entry,j) =>
                <li key={j}>
                  {entry.r[0] === entry.t1 && `${entry.t1} wins against ${entry.t2}`}
                  {entry.r[0] === entry.t2 && `${entry.t2} wins against ${entry.t1}`}
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    )
  }

  const TeamRow = ({ team, showScenarios }) => {
    const teamMatches = matches.filter(
      m => m.t1 === team.id || m.t2 === team.id
    )
    const { top4Scenarios, totalScenarios, scenarioList } = simulateTop4Scenarios(team.id)
    const probability = Number(top4Scenarios)/Number(totalScenarios)*100
    let runningPoints = 0
    console.log(team.id, top4Scenarios, totalScenarios, probability, scenarioList)
    return (
      <TableRow>
        <TableCell>{team.name}</TableCell>
        {teamMatches.map((match, i) => {
          const result = getResult(team, match)
          runningPoints += result === 'W' ? 2 : result === 'T' ? 1 : 0
          return (
            <MatchCell
              key={i}
              team={team}
              match={match}
              result={result}
              points={runningPoints}
            />
          )
        })}
        <TableCell className='probability'>
          <div>{probability.toFixed(2)}%</div>
          {probability > 0 && probability < 100 &&
          <Button variant='contained' onClick={() => showScenarios(scenarioList)}>
            Sample Case
          </Button>
          }
        </TableCell>
      </TableRow>
    )
  }

  const resultOptions = { N: '--', W: 'Win', L: 'Loss', T: 'Tie' }

  const MatchCell = ({ team, match, result, points }) => {
    return (
      <TableCell key={match.d} className={`result-${result}`}>
        <div>{match.t1 === team.id ? match.t2 : match.t1}</div>
        <div>
          {points}
          {initialMatches.find(m => m.id === match.id).r.length === 0 &&
            <select onChange={(event) => updateResult(team, match, event.target.value)} value={result}>
              {Object.keys(resultOptions).map(k =>
                <option key={k} value={k}>
                  {resultOptions[k]}
                </option>
              )}
            </select>
          }
        </div>
        <div>{formatDate(match.d)}</div>
      </TableCell>
    )
  }

  return (
    <Container>
      <Summary reset={() => setMatches(initialMatches)}/>
    </Container>
  )
}

export default App