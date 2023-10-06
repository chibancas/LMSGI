const misDatos = [
    {
        Nombre: "Juan José",
        Apellidos: "Fernández",
        Edad:"20",
        Localidad: "04620,Vera",
        Estudios: "CFGM Sistemas Microinformáticos y Redes"
    }
]

export const Datos = () => {
  return (
    <ul>
        {
            misDatos.map((datos)=>{
                return(
                    <>
                        <li>{datos.Nombre}</li>
                        <li>{datos.Apellidos}</li>
                        <li>{datos.Localidad}</li>
                        <li>{datos.Estudios}</li>
                    </>
                )
            })
        }
    </ul>
  )
}

