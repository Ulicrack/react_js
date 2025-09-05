import { useRef, useState, Fragment } from "react";
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { SelectButton } from 'primereact/selectbutton'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast';
import Swal from 'sweetalert2'

const opcionesColor = [
    { label: 'Rojo', value: 'red' },
    { label: 'Amarillo', value: 'yellow' },
    { label: 'Verde', value: 'green' },
]

const Tarjeta = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [color, setColor] = useState('gray')
    const [terminos, setTerminos] = useState(false)
    const toast = useRef(null)

    // Validaciones simples
    const nombreValido = nombre.trim() !== ""
    const emailValido = email.includes("@") && email.includes(".")
    const guardarHabilitado = nombreValido && emailValido && color !== 'gray' && terminos

    const guardarEnLocalStorage = (persona) => {
        const existente = localStorage.getItem('personas')
        const lista = existente ? JSON.parse(existente) : []
        lista.push(persona)
        localStorage.setItem('personas', JSON.stringify(lista))
    }

    const confirmarFormulario = () => {
        Swal.fire({
            title: '¿Desea confirmar los datos?',
            html: `
                <b>Nombre:</b> ${nombre || "Sin nombre"} <br/>
                <b>Email:</b> ${email || "Sin email"} <br/>
                <b>Color:</b> ${color !== 'gray' ? opcionesColor.find(i => i.value === color).label : 'Gris'}
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, guardar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                guardarEnLocalStorage({ nombre, email, color })
                toast.current?.show({
                    severity: 'success',
                    summary: 'Guardado',
                    detail: 'Tarjeta de presentación guardada'
                })
                // Limpiar después de guardar
                setNombre("")
                setEmail("")
                setColor('gray')
                setTerminos(false)
            }
        })
    }

    return (
        <Fragment>
            <Toast ref={toast} />

            <Card title='Tarjeta de presentación'>
                <div className="p-fluid" style={{ display: 'grid', gap: '1rem' }}>
                    
                    <span className="p-float-label">
                        <InputText
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <label htmlFor="nombre">Nombre</label>
                        {!nombreValido && <small style={{ color: 'red' }}>Nombre obligatorio</small>}
                    </span>

                    <span className="p-float-label">
                        <InputText
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        {!emailValido && email && <small style={{ color: 'red' }}>Email inválido</small>}
                    </span>

                    <div>
                        <SelectButton
                            value={color}
                            onChange={(e) => setColor(e.value)}
                            options={opcionesColor}
                        />
                    </div>

                    <div>
                        <Checkbox
                            inputId="terminos"
                            checked={terminos}
                            onChange={e => setTerminos(e.checked)}
                        />
                        <label htmlFor="terminos" style={{ marginLeft: '.5rem' }}>Acepto términos</label>
                        {!terminos && <small style={{ color: 'red', display: 'block', marginTop: '4px'}}>Debe aceptar términos</small>}
                    </div>

                    <div
                        style={{
                            backgroundColor: color,
                            borderRadius: 12,
                            padding: 16,
                            color: (color === 'red' || color === 'green') ? 'white' : 'black' // aquí
                        }}
                    >
                        <h2>Hola, soy {nombre || '_______'}</h2>
                        <p>Mi color favorito es {color !== 'gray' ? opcionesColor.find(i => i.value === color).label : 'Gris'}</p>
                        <p>Email: {email || '______'}</p>
                    </div>


                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Button
                            label="Guardar"
                            icon='pi pi-check'
                            severity="success"
                            onClick={confirmarFormulario}
                            disabled={!guardarHabilitado}
                        />
                        <Button
                            label="Limpiar"
                            icon='pi pi-eraser'
                            severity="secondary"
                            onClick={() => {
                                setNombre("")
                                setEmail("")
                                setColor('gray')
                                setTerminos(false)
                            }}
                        />
                    </div>
                </div>
            </Card>
        </Fragment>
    )
}

export default Tarjeta