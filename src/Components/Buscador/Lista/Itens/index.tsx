 
import { IUsuarios } from "../../../../Interfaces/Usuarios";
import style from './Buscador.module.scss'

export default function Itens({ cell, picture, name, location, phone, email }: IUsuarios) {
    return (

        <div className={style.info}>
            <div className={style.info_bloco}>
                <div className={style.imagem} >
                    <img src={picture.large} alt='imagem random' />
                </div>
                <div className={style.info_pessoal}>
                    <div>
                        <p><span>Nome:</span> {name.first}   {name.last} </p>
                    </div>
                    <div>
                        <p><span>Pais:</span> {location.country} </p>
                    </div>
                    <div>
                        <p><span>Estado:</span> {location.state} </p>
                    </div>
                    <div>
                        <p><span> Cidade:</span> {location.city} </p>
                    </div>
                    <div>
                        <p><span> Rua:</span> {location.street.name} </p>
                    </div>
                    <div>
                        <p> <span>Número:</span> {location.street.number} </p>
                    </div>
                    <div>
                        <p><span>Telefone:</span> {phone} </p>
                    </div>
                    <div>
                        <p><span>Celular:</span> {cell} </p>
                    </div>
                    <div className={style.email}>
                        <p><span>Email: </span>{email} </p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}