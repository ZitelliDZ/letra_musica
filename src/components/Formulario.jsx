import { useState } from "react"
import useLetras from "../hooks/useLetras"

const Formulario = () => {

    const [busqueda,setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const { setAlerta, busquedaLetra } = useLetras()

    const handleSubmit = (e) =>{
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('Coloca nombre del artista y cancion');
            return;
        }

        setAlerta('')
        busquedaLetra(busqueda)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <legend>Buscar por Artista y Canción</legend>
            <div className="form-grid">
                <div>
                    <label>Artista</label>
                    <input type="text" name="artista" placeholder="Busca por Artista"
                    value={busqueda.artista}
                    onChange={e=>setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                    />
                </div>
                <div>
                    <label>Canción</label>
                    <input type="text" name="cancion" placeholder="Nombre Canción"
                    value={busqueda.cancion}
                    onChange={e=>setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value
                    })}
                    />
                </div>
                <input type="submit" value='Buscar' />
            </div>
        </form>
    </>
  )
}

export default Formulario