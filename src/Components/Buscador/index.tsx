
import axios from "axios"
import { useState } from "react"
import { IUsuarios } from "../../Interfaces/Usuarios"
import Rodape from "../Rodape"
import Lista from "./Lista"
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
        <div className={style.pagina} >
            <div className={style.random} >
                <div className={style.titulo}  >
                    <h1  >Gerador de usuários randômicos</h1>
                </div>
                {carregando ? (
                    <h1 className={style.titulo_carregando}  >Carregando...</h1>
                ) : (
                    <div className={style.bloco}  >
                        <div className={style.botao_pai}  ><button className={style.botao} onClick={mostrarDados}> {ativadoUsuario ? 'Próximo usuário' : 'Procurar'} </button></div>
                        <hr />
                        <div>
                            <Lista setDados={usuarioData} />
                        </div>
                    </div>
                )}
            </div>
            <Rodape />

        </div>

    )
}

