import { useState } from "react";
import { Button } from 'primereact/button';

const OcultarTexto = () =>{

    const [visible, setvisible] = useState (true)

    return(
        <div>
            <Button onClick={()=>setvisible(!visible)} label={visible ? 'Ocultar' : 'Mostrar'}/>
            
            {visible && <h2> Hola React</h2>}
        </div>
    )
}

export default OcultarTexto