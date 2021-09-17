import React, {Fragment, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Table from "../teams/table"
import Navbar from '../layout/Navbar';
import Team from "../teams/team";
import {TodoContext} from '../../context'

// var baseUrl = "https://api.football-data.org/v2/"


function Laliga() {

  const {REACT_APP_AUTH_TOKEN, standings, setStandings, team, setTeam, player, setPlayer, prevMatches, setPrevMatches, upcMatches, setUpcMatches, searchTerm, setSearchTerm, loading, setLoading, name, setName} = useContext(TodoContext)

  useEffect(async () => {
    setLoading(true);

    const response = await axios.get(
      "https://api.football-data.org/v2/competitions/PD/standings", // BL1 = Bundesliga, SA = Serie A, FL1 = Ligue 1, PD = La Liga
      {
        headers: {
          "X-Auth-Token": REACT_APP_AUTH_TOKEN
        },
      }
    );

    setStandings(response.data.standings[0].table)
    setName(response.data.competition.name)
    setLoading(false)
  },[2]);

  const getTeamInfo = async (event) => {
    if (event.target.id !== "") {
      setLoading(true);

      const response = await axios.get(
        `https://api.football-data.org/v2/teams/${event.target.id}`,
        {
          headers: {
            "X-Auth-Token": REACT_APP_AUTH_TOKEN,
          },
        }
      );

      setTeam(response.data)
      setLoading(false)
    }
  };

  const getPlayerInfo = async (event) => {
    if (event.target.id !== "") {
      setLoading(true);

      const response = await axios.get(
        `https://api.football-data.org/v2/players/${event.target.id}`,
        {
          headers: {
            "X-Auth-Token": REACT_APP_AUTH_TOKEN,
          },
        }
      );

      setPlayer(response.data)
      setLoading(false)
    }
  };

  const getPrevMatches = async (event) => {
    if (event.target.id !== "") {
      setLoading(true);

      const response = await axios.get(
        `https://api.football-data.org/v2/teams/${event.target.id}/matches?status=FINISHED`,
        {
          headers: {
            "X-Auth-Token": REACT_APP_AUTH_TOKEN,
          },
        }
      );

      setPrevMatches(response.data.matches)
      setLoading(false)
    }
  };

  const getUpcMatches = async (event) => {
    if (event.target.id !== "") {
      setLoading(true);

      const response = await axios.get(
        `https://api.football-data.org/v2/teams/${event.target.id}/matches?status=SCHEDULED`,
        {
          headers: {
            "X-Auth-Token": REACT_APP_AUTH_TOKEN,
          },
        }
      );

      setUpcMatches(response.data.matches)
      setLoading(false)
    }
  };

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value)
  }

  

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/PD" render={(props) => {
            return (
              <Table clicked={getTeamInfo} loading={loading} standings={standings} name={name} />
            );
          }}
          />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/team/:id" render={(props) => {
            return (
              <Team {...props} getTeamInfo={() => getTeamInfo} team={team} getPlayerInfo={getPlayerInfo} getPrevMatches={getPrevMatches} getUpcMatches={getUpcMatches} onChangeHandler={onChangeHandler} searchTerm={searchTerm} loading={loading} />
            );
          }}
          />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default Laliga;
