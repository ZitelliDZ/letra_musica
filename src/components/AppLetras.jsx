import Formulario from "./Formulario"
import useLetras from "../hooks/useLetras"
import Alerta from "./Alerta";
import Letra from "./Letra";

const AppLetras = () => {

    const { alerta,letra,cargando } = useLetras();

  return (
    <>
    <header>
        Busqueda de Letras de Canciones
    </header>
    <Formulario />
    <main>
        {alerta ? 
            <Alerta>{alerta}</Alerta> : 
            letra? <Letra /> : 
            cargando? <p>Cargando...</p> :
                <p className="text-center">Busca letras de tus Artistas favoritos.</p>}
    </main>
    </>
  )
}

export default AppLetras