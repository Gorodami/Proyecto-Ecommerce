import { useEffect, useState } from 'react'
import Characts from '../characters/Characters'
import "./games.css"

const Games = ({user, setUser}) => {
    const [game, setGame] = useState()
    const [index, setIndex] = useState(2)

    useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=d0619e1d459b41f7aaca6ee0ef452953&page=${index}`)
    .then((response) => response.json())
    .then((data) => setGame(data.results))
    .catch((err) => console.error(err))
    }, [index])



 

 return (
    <>
        <main className='main-game'>
            {
                game ?
                    game.map((game) => <Characts key={game.id} {...game} user={user} />)
                    : <p>Cargando...</p>
            }
            </main>
    </>
            )
        }
export default Games;
