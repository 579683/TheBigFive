import React, {createContext, useState} from 'react'

const TodoContext = createContext()

function TodoContextProvider({children}) {

    const { REACT_APP_AUTH_TOKEN } = process.env;

    // HOOKS
    const [standings, setStandings] = useState([])
    const [team, setTeam] = useState({})
    const [player, setPlayer] = useState({})
    const [prevMatches, setPrevMatches] = useState([])
    const [upcMatches, setUpcMatches] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")

    return (
        <TodoContext.Provider
            value={{
                REACT_APP_AUTH_TOKEN,
                standings,
                setStandings,
                team, 
                setTeam,
                player,
                setPlayer,
                prevMatches,
                setPrevMatches,
                upcMatches,
                setUpcMatches,
                searchTerm, 
                setSearchTerm,
                loading,
                setLoading,
                name,
                setName
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContextProvider, TodoContext}