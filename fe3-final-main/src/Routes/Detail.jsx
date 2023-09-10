import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const { id } = useParams();
  console.log(id);
  const [dentista,setDentista] = useState(null);

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data)=> {
        setDentista(data);
      })
      .catch((error)=>{
        console.log("Error al obtener detalles del dentista",error);
      });
  },[id]);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id: {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {dentista && (
        <div>
          <p>Nombre: {dentista.name}</p>
          <p>Email: {dentista.email}</p>
          <p>Telefono: {dentista.phone}</p>
          <p>Sitio web: {dentista.website}</p>
        </div>
      )}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail