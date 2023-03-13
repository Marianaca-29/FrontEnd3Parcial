import React from 'react'
import { ContainerRunner, TitleUser, Information, UserInfo } from '../styles/StyledComponent'
import '../styles/styles.css';

const Runner = ({ name, age, city, dist }) => {
  return (
    <ContainerRunner>
      <TitleUser>¡Hola, liebre!<span></span></TitleUser>
      <p style={{fontSize: "20px"}}>tus datos y preferencias son:</p>
      <ContainerRunner>
        <Information>Nombre: <UserInfo>{name}</UserInfo></Information>
        <Information>Edad: <UserInfo>{age}</UserInfo></Information>
        <Information>Ciudad: <UserInfo>{city}</UserInfo></Information>
        <Information>Distancia: <UserInfo>{dist}</UserInfo></Information>
      </ContainerRunner>
    </ContainerRunner>
  )
}

export default Runner