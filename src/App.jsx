import { useState, useEffect } from 'react'
import './App.css'
import Score from './components/score.jsx'
import Cards from './components/cards.jsx'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [pokemon, setPokemon] = useState([])
  const [clickedIDs, setClickedIDs] = useState([])

  useEffect(() => {
    const getPokemon = async (url) => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(pokemon => [...pokemon, {
            url: data.sprites.other['official-artwork'].front_default,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            id: data.id
          }])
        })
    }
    getPokemon('https://pokeapi.co/api/v2/pokemon/charmander')
    getPokemon('https://pokeapi.co/api/v2/pokemon/pikachu')
    getPokemon('https://pokeapi.co/api/v2/pokemon/squirtle')
    getPokemon('https://pokeapi.co/api/v2/pokemon/mew')
    getPokemon('https://pokeapi.co/api/v2/pokemon/eevee ')
    getPokemon('https://pokeapi.co/api/v2/pokemon/dragonite ')
  }, []);

  function cardClick(e) {
    let id = e.currentTarget.id;
    if(clickedIDs.indexOf(id) < 0){
      setScore(score + 1);
      setClickedIDs(clickedIDs => [...clickedIDs,id])
    }
    else {
      if(score > bestScore) setBestScore(score)
      setScore(0)
      setClickedIDs([])
    }
  }

  return (
    <>
      <div className="container">
        <h1>Memory Card Game</h1>
        <Score score={score}
          bestScore={bestScore}></Score>
      </div>
      <ol className="cardsContainer">
        {pokemon.map(element => (
          <Cards url={element.url}
            name={element.name}
            id={element.id}
            key={element.id}
            onClick={cardClick} />
        ))}
      </ol>
    </>
  )
}

export default App
