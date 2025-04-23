import { useEffect, useState } from 'react'
import { api } from './api'
import './App.css'
import { cardType } from './types/cards'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './components/modal'

function App() {
  const [cards, setCards] = useState<cardType[]>([])
  const [listarUsuario,setListarUsuario] = useState<cardType[]>()
  const { URL_API } = api()

  useEffect(() => {
    URL_API.get('/cards')
    .then((response) => {
      setCards(response.data)
    })
  }, [URL_API])

  useEffect(() => {
    if (listarUsuario) {
      console.log('Card atualizado:', listarUsuario)
    }
  }, [listarUsuario])


  const navigate = useNavigate()
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setTimeout(() => {
      navigate('/cadastrar')
    },200)
  }

     const deletar = async(id: string) =>{
      try {
        await URL_API.delete(`/cards/${id}`)
      } catch (error) {
        console.log(error)
      }
    }

    const pegarUsuario = async (id:string) => {
      try {
         await URL_API.get(`/cards/${id}`)
        .then((response) => {
          setListarUsuario(response.data)
        })
      } catch (error) {
        console.log(error)
      } 
    }

  return (
    <div className="card-container">
      {cards.map((card) => (
        
        <div key={card.id} className="card">
          <img className='imagem' src={card.imagem} alt={card.nome} />
          <p className='nome'>{card.nome}</p>
          <p>{card.texto}</p>
          <a href={card.imagem}>{card.link}</a>
          <button className='btn btn-danger ' onClick={() => deletar(card.id)}>Deletar</button>
          <Modal id={card.id} nome={card.nome} texto={card.texto} imagem={card.imagem} link={card.link} pegarUsuario={pegarUsuario} />
        </div>
      ))}
        <Link className='botao' to="/cadastrar"  onClick={handleClick}>
          Cadastrar
        </Link>
      
    </div>
  )
}

export default App
