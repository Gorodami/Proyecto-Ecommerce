import { useEffect, useState } from 'react'
import Characts from '../characters/Characters'
import "./games.css"
import Pagination from '../Pagination/Pagination'
import Search from "../multimedia/search_FILL0_wght400_GRAD0_opsz48.svg"
import Footer from "../Login/footer"


const Games = () => {
    const [game, setGame] = useState()
    const [index, setIndex] = useState(1)
    const [search, setSearch] = useState("")

    useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=d0619e1d459b41f7aaca6ee0ef452953&page=${index}`)
    .then((response) => response.json())
    .then((data) => setGame(data.results))
    .catch((err) => console.error(err))
    }, [index])



    const handlePrev = () => {
        setIndex(prevValue => prevValue - 1)
    }

    const handleNext= () => {
        setIndex(prevValue => prevValue + 1)
    }

const searchGame = (e) =>{
    setSearch(e.target.value)
}

 return (
    <>
        <div className='search'>
        <input type="text" value={search} onChange={searchGame} />
        <a href="#">
         <img src={Search} alt="" />
         </a>
        </div>
        <main className='main-game'>

            {
                game ?
                    game
                    .filter(g => g.name.toLowerCase().includes(search.toLowerCase()))
                    .map((game) => <Characts key={game.id} {...game}  />)
                    : <p>Cargando...</p>
                    }
            </main>
        <Pagination index={index} handlePrev={handlePrev} handleNext={handleNext}/>
        <Footer/>
    </>
            )
}
export default Games;
