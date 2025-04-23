import  { useEffect, useState } from 'react';
import { api } from '../../api';
import { cardType } from '../../types/cards';

interface ModalProps extends cardType {
    pegarUsuario: (id: string) => void
}

const Modal = ({ id, nome, texto, imagem, link, pegarUsuario }: ModalProps) => {
    const [nomeNovo, setNomeNovo] = useState('');
    const [textoNovo, setTextoNovo] = useState('');
    const [imagemNova, setImagemNova] = useState('');
    const [linkNovo, setLinkNovo] = useState('');
    const { URL_API } = api();

    useEffect(() => {
        setNomeNovo(nome)
        setTextoNovo(texto)
        setImagemNova(imagem)
        setLinkNovo(link)
    }, [nome, texto, imagem, link])

    const Atualizar = (id: string) => {
        URL_API.put(`/cards/${id}`, {
            id: id,
            nome: nomeNovo,
            texto: textoNovo,
            imagem: imagemNova,
            link: linkNovo
        })
    }

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={() => pegarUsuario(id)} data-bs-toggle="modal" data-bs-target={`#modal-${id}`}>
                Atualizar
            </button>

            <div
                className="modal fade"
                id={`modal-${id}`}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby={`modal-label-${id}`}
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Atualizar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="p-4 border rounded shadow bg-light">
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label text-start w-100">Nome da imagem</label>
                                    <input
                                        id="nome"
                                        name="nome"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nome da imagem"
                                        value={nomeNovo}
                                        onChange={(e) => setNomeNovo(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="texto" className="form-label text-start w-100">Texto</label>
                                    <input
                                        id="texto"
                                        name="texto"
                                        type="text"
                                        className="form-control"
                                        placeholder="Texto de descrição"
                                        value={textoNovo}
                                        onChange={(e) => setTextoNovo(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="imagem" className="form-label text-start w-100">Link da Imagem</label>
                                    <input
                                        id="imagem"
                                        name="imagem"
                                        type="text"
                                        className="form-control"
                                        placeholder="Link da Imagem"
                                        value={imagemNova}
                                        onChange={(e) => setImagemNova(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="nome_imagem" className="form-label text-start w-100">Título da Imagem</label>
                                    <input
                                        id="nome_imagem"
                                        name="nome_imagem"
                                        type="text"
                                        className="form-control"
                                        placeholder="Título da imagem"
                                        value={linkNovo}
                                        onChange={(e) => setLinkNovo(e.target.value)}
                                    />
                                </div>
                            </form>
                            <div className="modal-footer d-flex justify-content-between">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button onClick={() => Atualizar(id)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
