import React from 'react'
import './App.scss'
import Main from "./components/layout/Main"
import PL from "./components/pages/PremierLeague";
import PD from "./components/pages/Laliga";
import BL1 from "./components/pages/Bundesliga";
import FL1 from "./components/pages/Ligue1";
import SA from "./components/pages/SerieA";

function App() {
  return (
    <div>
      <PL />
      {/* <PD /> */}
      {/* <BL1 /> */}
      {/* <FL1 /> */}
      {/* <SA /> */}
    </div>

  )
}

export default App;

// import React, {Fragment, useEffect, useState} from 'react';
// import './App.scss';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import axios from 'axios'
// import Table from "../src/components/teams/table"
// import Navbar from './components/layout/Navbar';
// import Team from "../src/components/teams/team";

// // var baseUrl = "https://api.football-data.org/v2/"


// // var token = '6650e090e32c4642a2ba1009c734c8b4'


// function App() {

//   const [standings, setStandings] = useState([])
//   const [team, setTeam] = useState({})
//   const [player, setPlayer] = useState({})
//   const [prevMatches, setPrevMatches] = useState([])
//   const [upcMatches, setUpcMatches] = useState([])
//   const [searchTerm, setSearchTerm] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [name, setName] = useState("")

//   useEffect(async () => {
//     setLoading(true);

//     const response = await axios.get(
//       "https://api.football-data.org/v2/competitions/PL/standings", // BL1 = Bundesliga, SA = Serie A, FL1 = Ligue 1, PD = La Liga
//       {
//         headers: {
//           "X-Auth-Token": REACT_APP_AUTH_TOKEN
//         },
//       }
//     );

//     setStandings(response.data.standings[0].table)
//     setName(response.data.competition.name)
//     setLoading(false)
//   },[2]);

//   const getTeamInfo = async (event) => {
//     if (event.target.id !== "") {
//       setLoading(true);

//       const response = await axios.get(
//         `https://api.football-data.org/v2/teams/${event.target.id}`,
//         {
//           headers: {
//             "X-Auth-Token": REACT_APP_AUTH_TOKEN,
//           },
//         }
//       );

//       setTeam(response.data)
//       setLoading(false)
//     }
//   };

//   const getPlayerInfo = async (event) => {
//     if (event.target.id !== "") {
//       setLoading(true);

//       const response = await axios.get(
//         `https://api.football-data.org/v2/players/${event.target.id}`,
//         {
//           headers: {
//             "X-Auth-Token": REACT_APP_AUTH_TOKEN,
//           },
//         }
//       );

//       setPlayer(response.data)
//       setLoading(false)
//     }
//   };

//   const getPrevMatches = async (event) => {
//     if (event.target.id !== "") {
//       setLoading(true);

//       const response = await axios.get(
//         `https://api.football-data.org/v2/teams/${event.target.id}/matches?status=FINISHED`,
//         {
//           headers: {
//             "X-Auth-Token": REACT_APP_AUTH_TOKEN,
//           },
//         }
//       );

//       setPrevMatches(response.data.matches)
//       setLoading(false)
//     }
//   };

//   const getUpcMatches = async (event) => {
//     if (event.target.id !== "") {
//       setLoading(true);

//       const response = await axios.get(
//         `https://api.football-data.org/v2/teams/${event.target.id}/matches?status=SCHEDULED`,
//         {
//           headers: {
//             "X-Auth-Token": REACT_APP_AUTH_TOKEN,
//           },
//         }
//       );

//       setUpcMatches(response.data.matches)
//       setLoading(false)
//     }
//   };

//   const onChangeHandler = (event) => {
//     setSearchTerm(event.target.value)
//   }

  

//   return (
//     <Router>
//       <Fragment>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" render={(props) => {
//             return (
//               <Table clicked={getTeamInfo} loading={loading} standings={standings} name={name} />
//             );
//           }}
//           />
//           {/* <Route exact path="/about" component={About} /> */}
//           <Route exact path="/team/:id" render={(props) => {
//             return (
//               <Team {...props} getTeamInfo={() => getTeamInfo} team={team} getPlayerInfo={getPlayerInfo} getPrevMatches={getPrevMatches} getUpcMatches={getUpcMatches} onChangeHandler={onChangeHandler} searchTerm={searchTerm} loading={loading} />
//             );
//           }}
//           />
//         </Switch>
//       </Fragment>
//     </Router>
//   );
// }

// export default App;
