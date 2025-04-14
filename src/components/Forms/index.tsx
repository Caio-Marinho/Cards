import React, { useState } from 'react';
import './formulario.css'
import { api } from '../../api';
import { Link, useNavigate } from 'react-router-dom';

export const Forms = () => {
  const { URL_API } = api()
  const [nome, setNome] = useState('');
  const [texto, setTexto] = useState('');
  const [imagem, setImagem] = useState('');
  const [link, setLink] = useState('');

  const enviar = () => {
    URL_API.post('/cards', {
      nome: nome,
      texto: texto,
      imagem: imagem,
      link: link
    })
  }

  const navigate = useNavigate()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    enviar();
    setTimeout(() => {
      navigate('/')
    },200)
  };



  return (
    <div className="position-absolute top-50 start-50 translate-middle w-100 maxwidth">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome da imagem</label>
          <input
            id="nome"
            name="nome"
            type="text"
            className="form-control"
            placeholder="Nome da imagem"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="texto" className="form-label">Texto</label>
          <input
            id="texto"
            name="texto"
            type="text"
            className="form-control"
            placeholder="Texto de descrição"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imagem" className="form-label">Link da Imagem</label>
          <input
            id="imagem"
            name="imagem"
            type="text"
            className="form-control"
            placeholder="Link da Imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nome_imagem" className="form-label">Título da Imagem</label>
          <input
            id="nome_imagem"
            name="nome_imagem"
            type="text"
            className="form-control"
            placeholder="Título da imagem"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>

        <Link to='/' onClick={enviar} type="submit" className="btn btn-primary w-100">Cadastrar</Link>
      </form>
    </div>
  );
};
