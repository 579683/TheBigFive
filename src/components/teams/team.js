import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Homenav from '../layout/Homenav';

const Team = (props) => {
    const { id, name, squad, venue, website } = props.team;

    if(props.loading) {
        return <Spinner />;
    }

    let filteredPlayers = squad.filter((player) => {
        return (
            player.name.toLowerCase().indexOf(props.searchTerm.toLowerCase()) !== -1
        );
    });

    const positionOrder = ["Goalkeeper", "Defender", "Midfielder", "Attacker"]
    const squadLayout = filteredPlayers.sort((a,b) => positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position)).map((player) => {
        return (
            <div key={player.id} className="card all-center">
                <ul className="p-1">
                    <li>
                        Name:
                        <Link onClick={props.getPlayerInfo} to={`/player/${player.id}`} id={player.id} style={{ fontWeight: "700", marginLeft: "2px", color: "#002366" }}>
                            {player.name}
                        </Link>
                    </li>
                    <li>Shirt Number: <b>{player.shirtNumber}</b></li>
                    <li>
                        <em>
                            Position: <b>{player.position}</b>
                        </em>
                    </li>
                    <li>Nationality: {player.nationality}</li>
                </ul>
            </div>
        );
    });

    
    // const squadLayout = filteredPlayers.sort((a,b) => positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position)).map((player) => {
    //     return (
    //         <tr key={player.id}>
    //             <td style={{ fontWeight: "700" }}>{player.name}</td>
    //             <td>&nbsp;&nbsp;{player.position}</td>
    //         </tr>
    //     )
    // })

    return (
        <Fragment>
            <Homenav name={name} />
            <header>
                <h1>{name}</h1>
                <div className="header-team-info">
                    <p>Stadium: {venue}</p>
                    <p>
                        Official website: <a href={website}>{website}</a>
                    </p>
                </div>
                <div className="header-matches-buttons">
                    <Link className="btn btn-light btn-first" onClick={props.getPrevMatches} to={`/previous-matches/${id}`} id={id}>
                        Previous matches
                    </Link>
                    <Link className="btn btn-primary" onClick={props.getUpcMatches} to={`/upcoming-matches/${id}`} id={id}>
                        Upcoming matches
                    </Link>
                </div>
            </header>
            <h1 className="text-center mt-1">Players</h1>
            <input type="search" placeholder="Search player" onChange={props.onChangeHandler} value={props.searchTerm} />
            <div className="container grid-3 mt-2 py-1">{squadLayout}</div>
        </Fragment>
    );
};

export default Team;