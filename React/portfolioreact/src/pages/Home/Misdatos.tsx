const misDatos = [
    {
        Nombre: "Juan José",
        Apellidos: "Fernández Fernández",
        Edad:"19",
        Localidad: "04620,Vera",
        Estudios: "Primaria, ESO, CFGM SMyR"
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

