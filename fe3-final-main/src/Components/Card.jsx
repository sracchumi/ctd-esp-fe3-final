import React from "react";
import {Link} from "react-router-dom"

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favList = JSON.parse(localStorage.getItem("favoritos")) || [];

    const isAlreadyFav = favList.some((fav)=> fav.id ===id);

    if(!isAlreadyFav){
      favList.push({id,name,username});
      localStorage.setItem("favoritos",JSON.stringify(favList));
      alert("La card fue agregada a favoritos");
    }else {
    alert("La card ya está en favoritos");
  }
};
  const removeFromFav = () => {
    const favList = JSON.parse(localStorage.getItem("favoritos")) || [];

    const updateFavList = favList.filter((fav) => fav.id !==id);

    localStorage.setItem("favoritos",JSON.stringify(updateFavList));
    alert("La card fue quitada de favoritos");
};

/*const isFav = JSON.parse(localStorage.getItem("favoritos"))?.some((fav) => fav.id === id);*/


  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to ={`/dentist/${id}`}>
          <p>Name: {name}</p>
        </Link>
        <Link to ={`/dentist/${id}`}>
          <p>Username: {username}</p>
        </Link>
        <Link to ={`/dentist/${id}`}>
          <p>Id: {id}</p>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">AddFav</button>
        <button onClick={removeFromFav} className="favButton">Remove fav</button>
    </div>
  );
};

export default Card;
