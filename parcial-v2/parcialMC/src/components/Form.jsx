import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
const [preferencias,setPreferencias] = useState({
    nombre:"",
    edad:"",
    dni:"",
    email:"",
    ciudad:"",
    distancia:""
})

const [show,setShow]= useState(false)
const [error,setError]= useState(false)

const handleSubmit = (e) => {
    e.preventDefault()
    if (preferencias.nombre.length>=3 && preferencias.edad.length >=2 && preferencias.dni.length >=7 && preferencias.email.length >=6 && preferencias.ciudad.length >=4 && preferencias.distancia.length >=1 ){
        setShow(true)
        setError(false)
    }else{
        setError(true)
    }
}

return (
    <div className='formR'>
        <form onSubmit={handleSubmit}>
            <label>Tu Nombre</label>
            <input type="text" value = {preferencias.nombre} onChange={(e) => setPreferencias({...preferencias, nombre: e.target.value.trim()})} />
            <label>Tu edad</label>
            <input type="text" value = {preferencias.edad} onChange={(e) => setPreferencias({...preferencias, edad: e.target.value})} />
            <label>Tu DNI</label>
            <input type="text" value = {preferencias.dni} onChange={(e) => setPreferencias({...preferencias, dni: e.target.value})} />
            <label>Tu correo electrónico</label>
            <input type="text" value = {preferencias.emaik} onChange={(e) => setPreferencias({...preferencias, email: e.target.value})} />
            <label>Tu ciudad</label>
            <input type="text" value = {preferencias.ciudad} onChange={(e) => setPreferencias({...preferencias, ciudad: e.target.value})} />
            <label>Tu distancia</label>
            <input type="text" value = {preferencias.distancia} onChange={(e) => setPreferencias({...preferencias, distancia: e.target.value})} />
            <button>Enviar</button>
            {error && "Por favor, revisá los datos ingresados"} 
        </form>
        {show && <Card preferencia = {preferencias}/>}
    </div>

)
}

export default Form