import React, {Fragment} from 'react'
import Spinner from '../layout/Spinner'
import Homenav from '../layout/Homenav';

const UpcomingMatches = (props) => {
    if(props.loading) {
        return <Spinner />;
    }

    return (
        <Fragment>
            <Homenav />
            <h1 className='text-center my-2'>Upcoming Matches</h1>
            <div className='container fixtures-container mt-2'>
                {props.upcMatches.map((match) => {
                    let formattedDate = new Date(match.utcDate);

                    return (
                        <Fragment key={match.id}>
                            <h3 className='fixtures-date'>
                                Date: 
                                <span className='date-span'>
                                    {formattedDate.toLocaleDateString()}
                                </span>
                            </h3>
                            <ul className='fixtures-list'>
                                <li className='fixtures-list-item'>
                                    <div className='fixtures-list-item-div'>
                                        <span>{match.homeTeam.name}&ensp;</span>
                                        <span>
                                            <b>vs</b>
                                        </span>
                                        <span>&ensp;{match.awayTeam.name}</span>
                                    </div>
                                    <span className='fixtures-list-item-span'>
                                        {match.competition.name}
                                    </span>
                                </li>
                            </ul>
                        </Fragment>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default UpcomingMatches