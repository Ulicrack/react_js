import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "primereact/button"

const Home = () =>{
    const navigate = useNavigate()
    return(
        <Fragment>
            <h2>Mi home</h2>
            <Button onClick={() => navigate('/Tarjeta')} label="Ir al formulario"></Button>
        </Fragment>
    )
}
export default Home