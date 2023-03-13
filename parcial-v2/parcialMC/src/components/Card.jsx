import React from 'react'

const Card = ({preferencia}) => {
return (
    <div className='cardR'>
    
        <h1> 🏃🏼 RESULTADOS FINALES 🏃🏻‍♀️ </h1>
        <ul type="none">
            <li>Tu nombre es: {preferencia.nombre}</li>
            <li>Tu edad es: {preferencia.edad}</li>
            <li>Tu dni es: {preferencia.dni}</li>
            <li>Tu correo electrónico es: {preferencia.email}</li>
            <li>Tu ciudad es: {preferencia.ciudad}</li>
            <li>➡️ Tu distancia elegida es: {preferencia.distancia} kms.</li>
        </ul>
    </div>
)
}

export default Card