import { useEffect, useState } from 'react'
import { api } from './api'
import './App.css'
import { cardType } from './types/cards'
import { Link, useNavigate } from 'react-router-dom'

function App() {
  const [cards, setCards] = useState<cardType[]>([])
  const { URL_API } = api()

  useEffect(() => {
    URL_API.get('/cards').then((response) => {
      setCards(response.data)
    })
  }, [URL_API])

  const navigate = useNavigate()
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setTimeout(() => {
      navigate('/cadastrar')
    },200)
  }

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img className='imagem' src={card.imagem} alt={card.nome} />
          <p className='nome'>{card.nome}</p>
          <p>{card.texto}</p>
          <a href={card.imagem}>{card.link}</a>
        </div>
      ))}
        <Link className='botao' to="/cadastrar"  onClick={handleClick}>
          Cadastrar
        </Link>
      
    </div>
  )
}

export default App
