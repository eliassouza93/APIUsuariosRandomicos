
import axios from "axios"
import { Fragment, useState } from "react"
import { IUsuarios } from "../../Interfaces/Usuarios"
import Rodape from "../Rodape"
import style from './Buscador.module.scss'
export default function Buscador() {
    const [usuarioData, setUsuarioData] = useState<IUsuarios[]>([])
    const [carregando, setCarregando] = useState(false)
    const [ativadoUsuario, setAtivadoUsuario] = useState(false)

    const mostrarDados = () => {
        setCarregando(true)
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                setUsuarioData(response.data.results)
            }).catch((error) => {
                console.log(error)
                setCarregando(true)
            }).finally(() => {
                setCarregando(false)
                setAtivadoUsuario(true)
            })
    }
    return (
        <div className={style.pagina}>
            <div className={style.random}>
                <div className={style.titulo}>
                    <h1 >Gerador de usuários randômicos</h1>
                </div>
                {carregando ? (
                    <h1 className={style.titulo_carregando}>Carregando...</h1>
                ) : (
                    <div className={style.bloco}>
                        <div className={style.botao_pai}><button className={style.botao} onClick={mostrarDados}> {ativadoUsuario ? 'Próximo usuário' : 'Procurar'} </button></div>
                        <hr />
                        {usuarioData.map((user) => (
                            <Fragment key={user.cell}>
                                <div className={style.info}>
                                    <div className={style.info_bloco}>
                                        <div className={style.imagem} >
                                            <img src={user.picture.large} alt='imagem random' />
                                        </div>
                                        <div className={style.info_pessoal}>
                                            <div>
                                                <p><span>Nome:</span> {user.name.first}   {user.name.last} </p>
                                            </div>
                                            <div>
                                                <p><span>Pais:</span> {user.location.country} </p>
                                            </div>
                                            <div>
                                                <p><span>Estado:</span> {user.location.state} </p>
                                            </div>
                                            <div>
                                                <p><span> Cidade:</span> {user.location.city} </p>
                                            </div>
                                            <div>
                                                <p><span> Rua:</span> {user.location.street.name} </p>
                                            </div>
                                            <div>
                                                <p> <span>Número:</span> {user.location.street.number} </p>
                                            </div>
                                            <div>
                                                <p><span>Telefone:</span> {user.phone} </p>
                                            </div>
                                            <div>
                                                <p><span>Celular:</span> {user.cell} </p>
                                            </div>
                                            <div className={style.email}>
                                                <p><span>Email: </span>{user.email} </p>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>

                                </div>
                            </Fragment>
                        ))}

                    </div>
                    
                )}
                 
            </div>
            <Rodape/>

        </div>

    )
}

