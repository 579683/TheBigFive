import React from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'


const Table = (props) => {
    const Tabledata = () => {
        return props.standings.map((team) => {
            const {
                position,
                team: { id, name, crestUrl },
                playedGames,
                won,
                draw,
                lost,
                points,
                goalsFor,
                goalsAgainst,
                goalDifference,
            } = team;

            
        // return props.upcMatches.map((match) => {
        //     const upcomingMatch = match.awayTeam.name;

            return (
                <tr key={id}>
                    <td style={{ fontWeight: "700" }}>{position}</td>
                    <td className="team-details">
                        <img src={crestUrl} className="crest-url" alt="team logo"/>
                        <span className="team-name">
                            <Link onClick={props.clicked} to={`/team/${id}`} id={id}>
                                {name}
                            </Link>
                        </span>
                    </td>
                    <td>{playedGames}</td>
                    <td className="td-won">{won}</td>
                    <td className="td-draw">{draw}</td>
                    <td className="td-lost">{lost}</td>
                    <td className="points">{points}</td>
                    <td className="td-gf">{goalsFor}</td>
                    <td className="td-ga">{goalsAgainst}</td>
                    <td>{goalDifference}</td>
                    {/* <td>{props.upcMatches.map((match) => {
                        <span>{match.awayTeam.name}</span>
                    })}</td> */}
                    {/* <td>key</td> */}
                </tr>
            );
        });
    // });
    };

    // if (props.loading) {
    //     return <Spinner />;
    // } else {
        return (
            <div className="container">
                <h1 className="text-center my-2">{props.name}</h1>
                <div style={{ overflowX: "auto" }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Pos.</th>
                                <th>Club</th>
                                <th>Played</th>
                                <th className="th-won">Won</th>
                                <th className="th-draw">Draw</th>
                                <th className="th-draw">Lost</th> {/* th-lost? */}
                                <th>Points</th>
                                <th className="th-gf">GF</th>
                                <th className="th-ga">GA</th>
                                <th>GD</th>
                                <th>Next</th>
                            </tr>
                        </thead>
                        <tbody>{Tabledata()}</tbody>
                    </table>
                </div>
            </div>
        );
    };
// };

export default Table;