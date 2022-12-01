import { IUsuarios } from "../../../Interfaces/Usuarios";
import Itens from "./Itens";

export default function Lista({ setDados }: { setDados: IUsuarios[] }) {
    return (
        <div>

            {setDados.map((dado, index) => (
                <Itens key={index}
                    {...dado}
                />
            ))}

        </div>
    )
}