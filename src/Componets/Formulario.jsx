import Label from "../Atoms/Label"
import InputSubmit from '../Atoms/InputSubmit'
import '../assets/Styles/Formulario.css'
import '../assets/Styles/Label.css'
import '../assets/Styles/Input.css'
import Input from "../Atoms/Input"

function Formulario() {
    const propierties =[
        {texto:"Nombre/s",tipo:"text"},
        {texto:"Apellidos",tipo:"text"},
        {texto:"Contraseña",tipo:"password"},
        {texto:"Email",tipo:"email"},
        {texto:"Telefono",tipo:"tel"},
        {texto:"Fecha de nacimineto",tipo:"date"},
        {texto:"Años de experiencia",tipo:"number"},
        {texto:"Rol en la compañia",tipo:"text"}
       
    ]
    
    return (
      <div className="contendor-principal">{
        propierties.map((palabra)=>(
          <>
            <Label text={palabra.texto}/>           
            <Input tipo={palabra.tipo}/>            
          </>
        ))
          }<InputSubmit></InputSubmit>
      </div>
    );
}

export default Formulario;